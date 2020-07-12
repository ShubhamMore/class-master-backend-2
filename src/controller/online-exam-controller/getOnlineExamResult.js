const OnlineExamResult = require('../../models/online-exam-result.model');
const OnlineExam = require('../../models/online-exam.model');
const errorHandler = require('../../handler/error.handler');

const getOnlineExamResult = async (req, res) => {
  try {
    const onlineExam = await OnlineExam.findById(req.body._id);
    if (!onlineExam) {
      throw new Error('No Online Exam Found');
    }

    const onlineExamResult = await OnlineExamResult.findOne({
      onlineExam: req.body._id,
      student: req.body.student,
    });
    if (!onlineExam) {
      throw new Error('No Online Exam Result Found');
    }

    res.status(200).send({ onlineExam, onlineExamResult });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getOnlineExamResult;
