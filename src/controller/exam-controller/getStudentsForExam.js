const StudentCourse = require('../../models/student-course.model');
const Exam = require('../../models/exam.model');
const mongoose = require('mongoose');
const errorHandler = require('../../handler/error.handler');

const getStudentsForExam = async (req, res) => {
  try {
    let students = null;

    const exam = await Exam.findById(req.body.exam);

    if (!exam) {
      throw new Error('Exam not Found');
    }

    if (exam.marks.length > 0) {
      students = await Exam.aggregate([
        {
          $match: {
            _id: mongoose.Types.ObjectId(req.body.exam),
          },
        },
        {
          $unwind: '$marks',
        },
        {
          $project: {
            _id: 0,
            examMarks: '$marks',
          },
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: ['$examMarks', '$$ROOT'],
            },
          },
        },
        {
          $project: {
            _id: 0,
            examMarks: 0,
          },
        },
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
            students: 0,
          },
        },
        {
          $project: {
            _id: 0,
            name: 1,
            rollNumber: 1,
            student: 1,
            marks: 1,
          },
        },
      ]);
    } else {
      students = await StudentCourse.aggregate([
        {
          $match: {
            branch: exam.branch,
            category: exam.category,
            course: exam.course,
            batch: exam.batch,
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
            students: 0,
          },
        },
        {
          $project: {
            _id: 0,
            name: 1,
            rollNumber: 1,
            student: 1,
          },
        },
      ]);
    }

    res.status(200).send(students);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentsForExam;
