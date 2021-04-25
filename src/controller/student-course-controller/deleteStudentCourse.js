const StudentCourse = require('../../models/student-course.model');

const mongoose = require('mongoose');
const sendNotification = require('../../notification/sendNotification');

const errorHandler = require('../../handler/error.handler');

const deleteStudentCourse = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findByIdAndDelete(req.body.id);

    if (!studentCourse) {
      throw new Error('No student Course Found');
    }

    const studentCourseDetails = await StudentCourse.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(studentCourse._id),
        },
      },
      {
        $addFields: {
          branchId: {
            $toObjectId: '$branch',
          },
          categoryId: {
            $toObjectId: '$category',
          },
          courseId: {
            $toObjectId: '$course',
          },
          batchId: {
            $toObjectId: '$batch',
          },
          installmentId: {
            $toObjectId: '$studentCourseInstallment',
          },
        },
      },
      {
        $lookup: { from: 'branches', localField: 'branchId', foreignField: '_id', as: 'branches' },
      },
      { $lookup: { from: 'courses', localField: 'courseId', foreignField: '_id', as: 'courses' } },
      { $lookup: { from: 'batches', localField: 'batchId', foreignField: '_id', as: 'batches' } },
      {
        $lookup: {
          from: 'studentcourseinstallments',
          localField: 'installmentId',
          foreignField: '_id',
          as: 'installments',
        },
      },
      {
        $lookup: {
          from: 'students',
          localField: 'student',
          foreignField: 'imsMasterId',
          as: 'students',
        },
      },
      {
        $addFields: {
          branch: { $arrayElemAt: ['$branches', 0] },
          course: { $arrayElemAt: ['$courses', 0] },
          batch: { $arrayElemAt: ['$batches', 0] },
          installments: { $arrayElemAt: ['$installments', 0] },
          student: { $arrayElemAt: ['$students', 0] },
        },
      },
      {
        $addFields: {
          category: {
            $filter: {
              input: '$branch.categories',
              as: 'curCategory',
              cond: {
                $eq: ['$$curCategory._id', '$categoryId'],
              },
            },
          },
        },
      },
      {
        $project: {
          branches: 0,
          'branch.categories': 0,
          'branch.currentPlanDetails': 0,
          courses: 0,
          batches: 0,
          students: 0,
          branchId: 0,
          categoryId: 0,
          courseId: 0,
          batchId: 0,
          installmentId: 0,
        },
      },
    ]);

    if (studentCourseDetails[0]) {
      const notificationMessage = `Hii ${studentCourseDetails[0].student.name}, you are removed from ${studentCourseDetails[0].batch.basicDetails.batchName} batch for ${studentCourseDetails[0].course.basicDetails.courseName} course in Institute ${studentCourseDetails[0].branch.basicDetails.branchName} (${studentCourseDetails[0].category.category}) - ${studentCourseDetails[0].branch.address.city}.`;

      const notificationTitle = 'Removed from Course';
      const receiverId = studentCourseDetails[0].student.imsMasterId;

      await sendNotification(notificationTitle, notificationMessage, receiverId);
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteStudentCourse;
