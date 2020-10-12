const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');
const Attendance = require('../../models/attendance.model');

const getStudentsForAttendance = async (req, res) => {
  try {
    let students = null;

    const attendance = await Attendance.findOne({
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      batch: req.body.batch,
      lecture: req.body.lecture,
    });

    if (attendance) {
      students = await Attendance.aggregate([
        {
          $match: {
            branch: req.body.branch,
            category: req.body.category,
            course: req.body.course,
            batch: req.body.batch,
            lecture: req.body.lecture,
          },
        },
        {
          $unwind: '$attendance',
        },
        {
          $project: {
            _id: 0,
            atten: '$attendance',
          },
        },
        {
          $replaceRoot: {
            newRoot: { $mergeObjects: ['$atten', '$$ROOT'] },
          },
        },
        { $project: { _id: 0, atten: 0 } },
        {
          $lookup: {
            from: 'students',
            localField: 'student', // field in the attendance collection
            foreignField: 'imsMasterId', // field in the Students collection
            as: 'students',
          },
        },
        {
          $replaceRoot: {
            newRoot: { $mergeObjects: [{ $arrayElemAt: ['$students', 0] }, '$$ROOT'] },
          },
        },
        { $project: { students: 0 } },
        { $project: { _id: 0, name: 1, rollNumber: 1, student: 1, attendance: 1 } },
      ]);
    } else {
      students = await StudentCourse.aggregate([
        {
          $match: {
            branch: req.body.branch,
            category: req.body.category,
            course: req.body.course,
            batch: req.body.batch,
            status: true,
          },
        },
        {
          $lookup: {
            from: 'students',
            localField: 'student', // field in the studentCourses collection
            foreignField: 'imsMasterId', // field in the Students collection
            as: 'students',
          },
        },
        {
          $replaceRoot: {
            newRoot: { $mergeObjects: [{ $arrayElemAt: ['$students', 0] }, '$$ROOT'] },
          },
        },
        { $project: { students: 0 } },
        { $project: { _id: 0, name: 1, rollNumber: 1, student: 1 } },
      ]);
    }

    res.status(200).send(students);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentsForAttendance;
