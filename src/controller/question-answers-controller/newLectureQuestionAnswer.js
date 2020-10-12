const LectureQuestionAnswer = require('../../models/lecture-question-answer.model');

const errorHandler = require('../../handler/error.handler');

const newLectureQuestionAnswer = async (req, res) => {
  try {
    const lectureQuestionAnswer = req.body;
    lectureQuestionAnswer.createdBy = req.user.imsMasterId;
    lectureQuestionAnswer.createdAt = new Date().getTime();
    lectureQuestionAnswer.editedAt = new Date().getTime();

    const newLectureQuestionAnswer = new LectureQuestionAnswer(lectureQuestionAnswer);

    await newLectureQuestionAnswer.save();

    res.status(200).send(newLectureQuestionAnswer);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newLectureQuestionAnswer;
