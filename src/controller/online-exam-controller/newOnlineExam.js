const OnlineExam = require('../../models/online-exam.model');
const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const newOnlineExam = async (req, res) => {
  try {
    const onlineExam = new OnlineExam(req.body);
    await onlineExam.save();

    const exam = {
      examTitle: onlineExam.title,
      onlineExam: onlineExam._id,
      outOfMarks: onlineExam.totalMarks,
      passingMarks: Math.ceil(onlineExam.totalMarks * (onlineExam.passingMarks / 100)),
      date: onlineExam.date,
      branch: onlineExam.branch,
      courseType: onlineExam.courseType,
      course: onlineExam.course,
      batch: onlineExam.batch,
      marks: [],
    };

    await new Exam(exam).save();

    const data = {
      success: true,
    };

    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newOnlineExam;
