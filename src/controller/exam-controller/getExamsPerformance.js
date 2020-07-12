const mongoose = require('mongoose');
const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const sortArrayOfObjects = require('../../functions/sortArrayOfObjects');

const findExamMarks = (student, marks) => {
  let mark;
  marks.forEach((curMark) => {
    if (curMark.student == student) {
      mark = curMark.marks;
      return;
    }
  });
  return mark;
};

const findPassFailStatus = (marks, passingMarks) => {
  if (marks >= passingMarks) {
    return '1';
  }
  return '0';
};

const getExamsPerformance = async (req, res) => {
  try {
    const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');

    let searchData = {
      date: date,
      course: req.body.course,
      batch: req.body.batch,
      marks: {
        $elemMatch: { student: mongoose.Types.ObjectId(req.body.student) },
      },
    };

    const exams = await Exam.find(searchData);

    const examsSend = new Array();

    exams.forEach((curExam) => {
      const examObj = {
        title: curExam.examTitle,
        onlineExam: curExam.onlineExam,
        date: curExam.date,
        marks: findExamMarks(req.body.student, curExam.marks),
      };
      examObj.status = findPassFailStatus(examObj.marks, curExam.passingMarks);

      examsSend.push(examObj);
    });

    const exam = sortArrayOfObjects(examsSend, 'date');

    res.status(200).send(exam);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getExamsPerformance;
