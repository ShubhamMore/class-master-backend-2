const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const getDate = (d) => {
  d = new Date(d);
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const getUpToDate = (d) => {
  const date = new Date(d);
  date.setDate(date.getDate() + 3);
  return date;
};

const getStudentBranchDashboard = async (req, res) => {
  try {
    const date = getDate(new Date());
    const upToDate = getDate(getUpToDate(date));

    const upComingLectures = StudentCourse.aggregate([
      {
        $match: {
          branch: req.body.branch,
          student: req.user.imsMasterId,
        },
      },
      {
        $lookup: {
          from: 'schedules',
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
                    {
                      $eq: ['$branch', '$$branchId'],
                    },
                    {
                      $eq: ['$category', '$$categoryId'],
                    },
                    {
                      $eq: ['$course', '$$courseId'],
                    },
                    {
                      $eq: ['$batch', '$$batchId'],
                    },
                    {
                      $gte: ['$date', date],
                    },
                    {
                      $lte: ['$date', upToDate],
                    },
                  ],
                },
              },
            },
          ],
          as: 'schedules',
        },
      },
      {
        $project: {
          schedules: 1,
          _id: 0,
        },
      },
      {
        $unwind: '$schedules',
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: ['$schedules', '$$ROOT'] },
        },
      },
      { $project: { schedules: 0 } },

      {
        $addFields: {
          batchId: { $toObjectId: '$batch' },
          courseId: { $toObjectId: '$course' },
          branchId: { $toObjectId: '$branch' },
          categoryId: { $toObjectId: '$category' },
          subjectId: { $toObjectId: '$subject' },
        },
      },
      {
        $lookup: {
          from: 'branches',
          localField: 'branchId',
          foreignField: '_id',
          as: 'branches',
        },
      },
      {
        $lookup: {
          from: 'courses',
          localField: 'courseId',
          foreignField: '_id',
          as: 'courses',
        },
      },
      {
        $lookup: {
          from: 'courses',
          localField: 'courseId',
          foreignField: '_id',
          as: 'courses',
        },
      },
      {
        $lookup: {
          from: 'batches',
          localField: 'batchId',
          foreignField: '_id',
          as: 'batches',
        },
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'teacher',
          foreignField: 'imsMasterId',
          as: 'teachers',
        },
      },
      {
        $addFields: {
          myBatch: { $arrayElemAt: ['$batches', 0] },
          myCourse: { $arrayElemAt: ['$courses', 0] },
          myBranch: { $arrayElemAt: ['$branches', 0] },
          myTeacher: { $arrayElemAt: ['$teachers', 0] },
        },
      },
      {
        $addFields: {
          categories: {
            $filter: {
              input: '$myBranch.categories',
              as: 'category',
              cond: {
                $eq: ['$$category._id', '$categoryId'],
              },
            },
          },
          subjects: {
            $filter: {
              input: '$myCourse.subjects',
              as: 'subject',
              cond: {
                $eq: ['$$subject._id', '$subjectId'],
              },
            },
          },
        },
      },
      {
        $addFields: {
          myCategory: { $arrayElemAt: ['$categories', 0] },
          mySubject: { $arrayElemAt: ['$subjects', 0] },
        },
      },
      {
        $project: {
          batches: 0,
          courses: 0,
          branches: 0,
          categories: 0,
          subjects: 0,
          batchId: 0,
          courseId: 0,
          branchId: 0,
          categoryId: 0,
          studentId: 0,
        },
      },
      {
        $project: {
          _id: 1,
          teacher: 1,
          branch: 1,
          category: 1,
          course: 1,
          subject: 1,
          batch: 1,
          teacherName: '$myTeacher.name',
          subjectName: '$mySubject.subject',
          categoryName: '$myCategory.category',
          courseName: '$myCourse.basicDetails.courseName',
          batchName: '$myBatch.basicDetails.batchName',
          topic: 1,
          sessionType: 1,
          date: 1,
          startTime: 1,
          endTime: 1,
          status: 1,
        },
      },
    ]);

    const pendingInstallments = StudentCourse.aggregate([
      {
        $match: {
          branch: req.body.branch,
          student: req.user.imsMasterId,
        },
      },
      {
        $lookup: {
          from: 'studentcourseinstallments',
          let: {
            branchId: '$branch',
            categoryId: '$category',
            courseId: '$course',
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    {
                      $eq: ['$branch', '$$branchId'],
                    },
                    {
                      $eq: ['$category', '$$categoryId'],
                    },
                    {
                      $eq: ['$course', '$$courseId'],
                    },
                  ],
                },
              },
            },
            {
              $unwind: '$installments',
            },
          ],
          as: 'installments',
        },
      },

      {
        $project: {
          installments: 1,
          _id: 0,
        },
      },
      {
        $unwind: '$installments',
      },
      {
        $project: {
          installment: '$installments',
        },
      },

      {
        $replaceRoot: {
          newRoot: { $mergeObjects: ['$installment', '$$ROOT'] },
        },
      },
      {
        $addFields: {
          'installments.installmentId': '$installments._id',
        },
      },

      { $project: { installment: 0, 'installments._id': 0 } },

      {
        $replaceRoot: {
          newRoot: { $mergeObjects: ['$installments', '$$ROOT'] },
        },
      },
      { $project: { installments: 0 } },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$receiptId', null],
              },
              {
                $lte: ['$installmentDate', date],
              },
            ],
          },
        },
      },

      {
        $addFields: {
          courseId: { $toObjectId: '$course' },
          branchId: { $toObjectId: '$branch' },
          categoryId: { $toObjectId: '$category' },
        },
      },

      {
        $lookup: {
          from: 'branches',
          localField: 'branchId',
          foreignField: '_id',
          as: 'branches',
        },
      },

      {
        $lookup: {
          from: 'courses',
          localField: 'courseId',
          foreignField: '_id',
          as: 'courses',
        },
      },
      {
        $addFields: {
          myCourse: { $arrayElemAt: ['$courses', 0] },
          myBranch: { $arrayElemAt: ['$branches', 0] },
        },
      },
      {
        $addFields: {
          categories: {
            $filter: {
              input: '$myBranch.categories',
              as: 'category',
              cond: {
                $eq: ['$$category._id', '$categoryId'],
              },
            },
          },
        },
      },
      {
        $addFields: {
          myCategory: { $arrayElemAt: ['$categories', 0] },
        },
      },
      {
        $project: {
          courses: 0,
          branches: 0,
          categories: 0,
          courseId: 0,
          branchId: 0,
          categoryId: 0,
        },
      },
      {
        $project: {
          _id: 1,
          status: 1,
          date: 1,
          installmentNo: 1,
          installmentDate: 1,
          installmentAmount: 1,
          amountPending: 1,
          totalAmount: 1,
          installmentId: 1,
          pendingAmount: 1,
          amountCollected: 1,
          noOfInstallments: 1,
          branch: 1,
          category: 1,
          course: 1,
          categoryName: '$myCategory.category',
          courseName: '$myCourse.basicDetails.courseName',
        },
      },
    ]);

    Promise.all([upComingLectures, pendingInstallments])
      .then((resData) => {
        res.status(200).send({
          upComingLectures: resData[0],
          pendingInstallments: resData[1],
        });
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentBranchDashboard;
