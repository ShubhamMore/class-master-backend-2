const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const findStudentNames = require('../../functions/findStudentNames');
const findCourseTypeValue = require('../../functions/findCourseTypeValue');
const findBranchName = require('../../functions/findBranchName');

const getExamReport = async (req, res) => {
  try {
    const exam = await Exam.findById(req.body._id);

    if (!exam) {
      throw new Error('No Exam Found');
    }

    const course = await Course.findById(exam.course);
    const batch = await Batch.findById(exam.batch);

    const students = await findStudentNames(exam.marks);

    const marks = new Array();

    exam.marks.forEach((curMark, i) => {
      const mark = {
        student: students[i].name,
        marks: curMark.marks,
      };
      marks.push(mark);
    });

    const branch = exam.branch;
    exam.branch = await findBranchName(branch);
    exam.courseType = await findCourseTypeValue(branch, exam.courseType);
    exam.course = course.courseName;
    exam.batch = batch.batchName;
    exam.marks = marks;

    res.status(200).send(exam);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getExamReport;
