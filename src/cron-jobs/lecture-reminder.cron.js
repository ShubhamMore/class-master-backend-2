const cron = require('node-cron');
const Schedule = require('../models/schedule.model');

const request = require('request-promise');

const getDate = () => {
  const tomorrow = new Date().setDate(new Date().getDate() + 1);
  const d = new Date(tomorrow);
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const lectureReminder = async () => {
  cron.schedule(
    '00 00 19 * * *', // Every day on 19:00:00
    async () => {
      const date = getDate();

      try {
        const lectures = await Schedule.aggregate([
          { $match: { date } },
          {
            $addFields: {
              branchId: { $toObjectId: '$branch' },
              categoryId: { $toObjectId: '$category' },
              courseId: { $toObjectId: '$course' },
              batchId: { $toObjectId: '$batch' },
              subjectId: { $toObjectId: '$subject' },
            },
          },

          {
            $lookup: {
              from: 'employees',
              localField: 'teacher',
              foreignField: 'imsMasterId',
              as: 'employees',
            },
          },

          {
            $lookup: {
              from: 'branches',
              let: { branch: '$branchId', category: '$categoryId' },
              pipeline: [
                {
                  $match: { $expr: { $eq: ['$_id', '$$branch'] } },
                },
                { $project: { basicDetails: 1, categories: 1, _id: 0 } },
                { $addFields: { categoryId: '$$category' } },
                {
                  $project: {
                    basicDetails: 1,
                    tempCategory: {
                      $filter: {
                        input: '$categories',
                        as: 'category',
                        cond: {
                          $eq: ['$$category._id', '$categoryId'],
                        },
                      },
                    },
                  },
                },
                {
                  $replaceRoot: {
                    newRoot: { $mergeObjects: [{ $arrayElemAt: ['$tempCategory', 0] }, '$$ROOT'] },
                  },
                },
                {
                  $project: {
                    _id: 0,
                    categoryName: '$category',
                    branchName: '$basicDetails.branchName',
                  },
                },
              ],
              as: 'branches',
            },
          },
          {
            $lookup: {
              from: 'courses',
              let: { course: '$courseId', subject: '$subjectId' },
              pipeline: [
                {
                  $match: { $expr: { $eq: ['$_id', '$$course'] } },
                },
                { $project: { basicDetails: 1, subjects: 1, _id: 0 } },
                { $addFields: { subjectId: '$$subject' } },
                {
                  $project: {
                    basicDetails: 1,
                    tempSubject: {
                      $filter: {
                        input: '$subjects',
                        as: 'subject',
                        cond: {
                          $eq: ['$$subject._id', '$subjectId'],
                        },
                      },
                    },
                  },
                },
                {
                  $replaceRoot: {
                    newRoot: { $mergeObjects: [{ $arrayElemAt: ['$tempSubject', 0] }, '$$ROOT'] },
                  },
                },
                {
                  $project: {
                    _id: 0,
                    subjectName: '$subject',
                    courseName: '$basicDetails.courseName',
                  },
                },
              ],
              as: 'courses',
            },
          },
          {
            $lookup: {
              from: 'batches',
              let: { batch: '$batchId' },
              pipeline: [
                {
                  $match: { $expr: { $eq: ['$_id', '$$batch'] } },
                },
                { $project: { basicDetails: 1, _id: 0 } },
                { $project: { batchName: '$basicDetails.batchName' } },
              ],
              as: 'batches',
            },
          },

          {
            $lookup: {
              from: 'studentcourses',
              let: {
                branchId: '$branch',
                categoryId: '$category',
                courseId: '$course',
                batchId: '$batch',
              },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ['$branch', '$$branchId'] },
                        { $eq: ['$category', '$$categoryId'] },
                        { $eq: ['$course', '$$courseId'] },
                        { $eq: ['$batch', '$$batchId'] },
                      ],
                    },
                  },
                },

                {
                  $project: {
                    _id: 0,
                    student: 1,
                  },
                },

                {
                  $lookup: {
                    from: 'students',
                    let: {
                      imsId: '$student',
                    },
                    pipeline: [
                      {
                        $match: {
                          $expr: {
                            $eq: ['$imsMasterId', '$$imsId'],
                          },
                        },
                      },

                      {
                        $project: {
                          _id: 0,
                          imsMasterId: 1,
                          phone: 1,
                          name: 1,
                          email: 1,
                        },
                      },
                    ],
                    as: 'students',
                  },
                },
                {
                  $replaceRoot: {
                    newRoot: {
                      $mergeObjects: [
                        {
                          $arrayElemAt: ['$students', 0],
                        },
                        '$$ROOT',
                      ],
                    },
                  },
                },

                { $project: { students: 0, student: 0 } },
              ],
              as: 'students',
            },
          },

          {
            $addFields: {
              teacher: {
                $arrayElemAt: ['$employees', 0],
              },
            },
          },

          {
            $replaceRoot: {
              newRoot: {
                $mergeObjects: [
                  {
                    $arrayElemAt: ['$branches', 0],
                  },
                  '$$ROOT',
                ],
              },
            },
          },

          {
            $replaceRoot: {
              newRoot: {
                $mergeObjects: [
                  {
                    $arrayElemAt: ['$courses', 0],
                  },
                  '$$ROOT',
                ],
              },
            },
          },

          {
            $replaceRoot: {
              newRoot: {
                $mergeObjects: [
                  {
                    $arrayElemAt: ['$batches', 0],
                  },
                  '$$ROOT',
                ],
              },
            },
          },
          {
            $project: {
              employees: 0,
              branches: 0,
              courses: 0,
              batches: 0,
              branchId: 0,
              categoryId: 0,
              courseId: 0,
              batchId: 0,
              subjectId: 0,
              __v: 0,
            },
          },
        ]);

        for (let lecture of lectures) {
          const lectureMessage = `You Have lecture on ${lecture.topic} of Subject ${
            lecture.subjectName
          } of course ${lecture.courseName} on ${lecture.date.split('-').reverse().join('-')} at ${
            lecture.startTime
          } `;

          const userNotificationRequests = new Array();

          const notification = {
            receiverId: lecture.teacher.imsMasterId,
            title: 'Lecture Reminder',
            message: lectureMessage,
          };

          userNotificationRequests.push(notification);

          for (let student of lecture.students) {
            const newNotification = {
              receiverId: student.imsMasterId,
              title: 'Lecture reminder',
              message: lectureMessage,
            };

            const options = {
              method: 'POST',
              url: process.env.API_URI + '/sendNotification',
              headers: {
                'Content-Type': 'application/json',
                authorization: 'Bearer ' + process.env.SERVER_TOKEN,
              },
              body: newNotification,
              json: true,
            };

            userNotificationRequests.push(request(options));
          }

          try {
            Promise.all(userNotificationRequests)
              .then((resData) => {})
              .catch((e) => {});
          } catch (e) {}
        }
      } catch (e) {}
    },
    {
      scheduled: true,
      timezone: 'Asia/Kolkata',
    }
  );
};

module.exports = lectureReminder;
