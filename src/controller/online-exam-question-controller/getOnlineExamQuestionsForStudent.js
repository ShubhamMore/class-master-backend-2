const OnlineExam = require('../../models/online-exam.model');
const OnlineExamQuestion = require('../../models/online-exam-question.model');
const OnlineExamResult = require('../../models/online-exam-result.model');
const errorHandler = require('../../handler/error.handler');

const getOnlineExamQuestions = async (req, res) => {
  try {
    const onlineExamResult = await OnlineExamResult.findOne({
      student: req.body.student,
      onlineExam: req.body._id,
    });

    const onlineExam = await OnlineExam.findById(req.body._id);
    if (!onlineExam) {
      throw new Error('No Online Exam Available');
    }

    if (onlineExamResult) {
      res.status(200).send({ onlineExamResult, onlineExam });
      return;
    }

    const onlineExamQuestions = await OnlineExamQuestion.find({
      onlineExam: req.body._id,
      status: '1',
    }).limit(+onlineExam.totalQuestions);

    res.status(200).send({ onlineExam, onlineExamQuestions });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getOnlineExamQuestions;
