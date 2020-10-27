const Schedule = require('../../models/schedule.model');
const mongoose = require('mongoose');
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

const getUpcomingLecturesForEmployee = async (req, res) => {
  try {
    const date = getDate(new Date());
    const upToDate = getDate(getUpToDate(date));

    const upComingLectures = await Schedule.aggregate([
      {
        $match: {
          branch: req.body.branch,
          teacher: req.user.imsMasterId,
        },
      },
      {
        $match: {
          $expr: {
            $and: [
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

    res.status(200).send(upComingLectures);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getUpcomingLecturesForEmployee;
