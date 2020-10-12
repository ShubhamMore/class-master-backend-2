const QuestionAnswer = require('../../models/lecture-question-answer.model');
const errorHandler = require('../../handler/error.handler');

const deleteLectureQuestionAnswer = async (req, res) => {
  try {
    const questionAnswer = await QuestionAnswer.findById(req.body.id);

    if (!questionAnswer) {
      throw new Error('Question Answer Not Found');
    }

    if (questionAnswer.createdBy !== req.user.imsMasterId) {
      throw new Error('You are not Authorized to Delete This Question Answer.');
    }

    await QuestionAnswer.findByIdAndDelete(req.body.id);

    res.status(200).send(questionAnswer);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteLectureQuestionAnswer;
