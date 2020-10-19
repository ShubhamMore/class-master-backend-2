const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const getStudentAllCourses = async (req, res) => {
  try {
    const studentCourses = await StudentCourse.aggregate([
      {
        $match: {
          branch: req.body.branch,
          student: req.user.imsMasterId,
        },
      },
      {
        $addFields: {
          batchId: { $toObjectId: '$batch' },
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
        $lookup: {
          from: 'batches',
          localField: 'batchId',
          foreignField: '_id',
          as: 'batches',
        },
      },
      {
        $addFields: {
          myBatch: { $arrayElemAt: ['$batches', 0] },
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
          batches: 0,
          courses: 0,
          branches: 0,
          categories: 0,
          batchId: 0,
          courseId: 0,
          branchId: 0,
          categoryId: 0,
        },
      },
      {
        $project: {
          _id: 1,
          student: 1,
          studentCourseInstallment: 1,
          branch: 1,
          category: 1,
          course: 1,
          batch: 1,
          categoryName: '$myCategory.category',
          courseName: '$myCourse.basicDetails.courseName',
          batchName: '$myBatch.basicDetails.batchName',
          activationDate: 1,
          rollNumber: 1,
          discount: 1,
          additionalDiscountType: 1,
          additionalDiscountAmount: 1,
          netPayable: 1,
          status: 1,
        },
      },
    ]);

    res.status(200).send(studentCourses);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentAllCourses;
