const OnlineExamQuestion = require('../../models/online-exam-question.model');
const errorHandler = require('../../handler/error.handler');

const newOnlineExamQuestion = async (req, res) => {
  try {
    const onlineExamQuestion = new OnlineExamQuestion(req.body);
    await onlineExamQuestion.save();

    const data = {
      success: true,
    };
    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newOnlineExamQuestion;
