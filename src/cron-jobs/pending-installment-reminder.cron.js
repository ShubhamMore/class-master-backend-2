const cron = require('node-cron');
const StudentCourseInstallment = require('../models/student-course-installment.model');

const request = require('request-promise');

const getDate = () => {
  const d = new Date();
  d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const pendingInstallmentReminder = async () => {
  cron.schedule(
    '00 00 11 * * *', // Every day on 11:00:00
    async () => {
      const date = getDate();

      try {
        const installments = await StudentCourseInstallment.aggregate([
          {
            $match: {
              installments: {
                $elemMatch: { installmentDate: { $lt: date }, receiptId: null },
              },
            },
          },
          {
            $unwind: '$installments',
          },
          {
            $match: {
              'installments.installmentDate': { $lt: date },
              'installments.receiptId': null,
            },
          },
          {
            $project: { _id: 0, installments: 1, student: 1, branch: 1, category: 1, course: 1 },
          },

          {
            $replaceRoot: {
              newRoot: {
                $mergeObjects: ['$installments', '$$ROOT'],
              },
            },
          },
          {
            $project: { installments: 0 },
          },
          {
            $addFields: {
              branchId: { $toObjectId: '$branch' },
              categoryId: { $toObjectId: '$category' },
              courseId: { $toObjectId: '$course' },
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
                    newRoot: {
                      $mergeObjects: [{ $arrayElemAt: ['$tempCategory', 0] }, '$$ROOT'],
                    },
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
              let: { course: '$courseId' },
              pipeline: [
                {
                  $match: { $expr: { $eq: ['$_id', '$$course'] } },
                },
                { $project: { basicDetails: 1, _id: 0 } },

                {
                  $project: {
                    courseName: '$basicDetails.courseName',
                  },
                },
              ],
              as: 'courses',
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
                    $arrayElemAt: ['$students', 0],
                  },
                  '$$ROOT',
                ],
              },
            },
          },

          {
            $project: {
              branches: 0,
              courses: 0,
              batches: 0,
              students: 0,
              branchId: 0,
              categoryId: 0,
              courseId: 0,
              student: 0,
              __v: 0,
            },
          },
        ]);

        const userNotificationRequests = new Array();

        for (let installment of installments) {
          //   if (installment.receiptId) {
          //     continue;
          //   }

          const installmentMessage = `You have overdue installment amount to Pay of INR ${installment.installmentAmount
            .toString()
            .toFixed(2)}/- of course ${installment.courseName} of institute ${
            installment.branchName
          }(${(installment, categoryName)}). Pay this Installment as early as Possible`;

          const newNotification = {
            receiverId: installment.imsMasterId,
            title: 'Installment Reminder',
            message: installmentMessage,
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
      } catch (e) {}
    },
    {
      scheduled: true,
      timezone: 'Asia/Kolkata',
    }
  );
};

module.exports = pendingInstallmentReminder;
