const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const findStudentNames = require('../../functions/findStudentNames');
const findCourseTypeValue = require('../../functions/findCourseTypeValue');
const findBranchName = require('../../functions/findBranchName');

const getExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.body._id);

    if (!exam) {
      throw new Error('No Exam Found');
    }

    const course = await Course.findById(exam.course);
    const batch = await Batch.findById(exam.batch);

    const students = await findStudentNames(exam.marks);

    const examMetaData = {
      branch: await findBranchName(exam.branch),
      courseType: await findCourseTypeValue(exam.branch, exam.courseType),
      course: course.courseName,
      batch: batch.batchName,
      students: students,
    };

    res.status(200).send({ exam, examMetaData });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getExam;
