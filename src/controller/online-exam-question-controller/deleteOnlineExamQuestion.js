const OnlineExamQuestion = require('../../models/online-exam-question.model');
const errorHandler = require('../../handler/error.handler');

const deleteOnlineExamQuestion = async (req, res) => {
  try {
    const onlineExamQuestion = await OnlineExamQuestion.findOneAndDelete(req.body._id);

    if (!onlineExamQuestion) {
      throw new Error('No Online Exam Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteOnlineExamQuestion;
