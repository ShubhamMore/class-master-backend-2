const OnlineExam = require('../../models/online-exam.model');
const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const editOnlineExam = async (req, res) => {
  try {
    const onlineExam = await OnlineExam.findByIdAndUpdate(req.body._id, req.body);

    const exam = {
      examTitle: onlineExam.title,
      outOfMarks: onlineExam.totalMarks,
      passingMarks: Math.ceil(onlineExam.totalMarks * (onlineExam.passingMarks / 100)),
      date: onlineExam.date,
    };

    await Exam.updateOne({ onlineExam: req.body._id }, exam);

    if (!onlineExam) {
      throw new Error('Online Exam Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editOnlineExam;
