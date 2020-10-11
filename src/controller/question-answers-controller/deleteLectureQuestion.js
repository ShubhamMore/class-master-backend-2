const LectureQuestion = require('../../models/lecture-question.model');
const LectureQuestionAnswer = require('../../models/lecture-question-answer.model');
const errorHandler = require('../../handler/error.handler');

const deleteLectureQuestion = async (req, res) => {
  try {
    const lectureQuestion = await LectureQuestion.findById(req.body.id);

    if (!lectureQuestion) {
      throw new Error('Question Not Found');
    }

    if (lectureQuestion.createdBy !== req.user.insMasterId) {
      throw new Error('You are not Authorized to Delete This Question.');
    }

    const deleteLectureQuestion = LectureQuestion.findByIdAndDelete(req.body.id);
    const deleteLectureQuestionAnswer = LectureQuestionAnswer.deleteMany({ question: req.body.id });

    Promise.all([deleteLectureQuestion, deleteLectureQuestionAnswer])
      .then((resData) => {
        res.status(200).send({ success: true });
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteLectureQuestion;
