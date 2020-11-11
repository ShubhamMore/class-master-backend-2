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
      passingMarks: onlineExam.passingMarks,
      date: onlineExam.date,
      time: onlineExam.time,
      duration: onlineExam.duration,
      branch: onlineExam.branch,
      category: onlineExam.category,
      course: onlineExam.course,
      batch: onlineExam.batch,
      subject: onlineExam.subject,
      marks: [],
    };

    await new Exam(exam).save();

    res.status(201).send(onlineExam);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newOnlineExam;
