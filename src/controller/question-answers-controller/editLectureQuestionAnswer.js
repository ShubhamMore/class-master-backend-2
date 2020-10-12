const QuestionAnswer = require('../../models/lecture-question-answer.model');
const errorHandler = require('../../handler/error.handler');

const editLectureQuestionAnswer = async (req, res) => {
  try {
    const questionAnswer = await QuestionAnswer.findById(req.body._id);

    if (!questionAnswer) {
      throw new Error('Question Answer Not Found');
    }

    if (questionAnswer.createdBy !== req.user.imsMasterId) {
      throw new Error('You are not Authorized to edit This Question.');
    }

    await QuestionAnswer.findByIdAndUpdate(req.body._id, req.body);

    res.status(200).send(questionAnswer);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editLectureQuestionAnswer;
