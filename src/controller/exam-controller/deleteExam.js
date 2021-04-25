const Exam = require('../../models/exam.model');

const request = require('request-promise');

const errorHandler = require('../../handler/error.handler');

const getDateDifference = (date) => {
  const date1 = new Date().getTime();
  const date2 = new Date(date).getTime();

  const _31hrs = 111600000; // 31 * 60 * 60 * 1000
  const dateDiff = date1 - date2;

  if (dateDiff < _31hrs) {
    return true;
  }
  return false;
};

const getNotificationRequest = (notification) => {
  const options = {
    method: 'POST',
    url: process.env.API_URI + '/sendNotification',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + process.env.SERVER_TOKEN,
    },
    body: notification,
    json: true,
  };

  return request(options);
};

const deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndRemove(req.body.id);

    if (!exam) {
      throw new Error('No Exam Found');
    }

    res.status(200).send({ success: true });

    const dateDifference = getDateDifference(schedule.date);

    if (dateDifference) {
      const exams = await Exam.aggregate([
        { $match: { _id: exam._id } },
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

      for (let exam of exams) {
        const examMessage = `You Have ${exam.onlineExam ? 'Online' : ''} exam on ${
          exam.examTitle
        } of Subject ${exam.subjectName} of course ${exam.courseName} on ${exam.date
          .split('-')
          .reverse()
          .join('-')} at ${exam.time} `;

        const userNotificationRequests = new Array();

        for (let student of exam.students) {
          const newNotification = {
            receiverId: student.imsMasterId,
            title: 'Exam Reminder',
            message: examMessage,
          };

          const notificationRequest = getNotificationRequest(newNotification);

          userNotificationRequests.push(notificationRequest);
        }

        try {
          Promise.all(userNotificationRequests)
            .then((resData) => {})
            .catch((e) => {
              console.log(e);
            });
        } catch (e) {
          console.log(e);
        }
      }
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteExam;
