const OnlineExam = require('../../models/online-exam.model');
const OnlineExamQuestion = require('../../models/online-exam-question.model');
const errorHandler = require('../../handler/error.handler');

const getOnlineExamQuestions = async (req, res) => {
  try {
    const onlineExam = await OnlineExam.findById(req.body.id);
    if (!onlineExam) {
      throw new Error('No Online Exam Available');
    }

    const onlineExamQuestions = await OnlineExamQuestion.find({
      onlineExam: req.body.id,
    });

    res.status(200).send({ onlineExam, onlineExamQuestions });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getOnlineExamQuestions;
