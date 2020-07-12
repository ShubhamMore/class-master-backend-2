const OnlineExamQuestion = require('../../models/online-exam-question.model');
const errorHandler = require('../../handler/error.handler');

const editOnlineExamQuestionStatus = async (req, res) => {
  try {
    const onlineExamQuestion = await OnlineExamQuestion.findByIdAndUpdate(req.body._id, req.body);

    if (!onlineExamQuestion) {
      throw new Error('Exam Question Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editOnlineExamQuestionStatus;
