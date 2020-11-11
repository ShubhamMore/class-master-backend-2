const OnlineExamQuestion = require('../../models/online-exam-question.model');
const errorHandler = require('../../handler/error.handler');

const getOnlineExamQuestion = async (req, res) => {
  try {
    const onlineExamQuestion = await OnlineExamQuestion.findById(req.body.id);

    if (!onlineExamQuestion) {
      throw new Error('No Content Available');
    }

    res.status(200).send(onlineExamQuestion);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getOnlineExamQuestion;
