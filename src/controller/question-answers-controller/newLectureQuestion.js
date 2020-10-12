const LectureQuestion = require('../../models/lecture-question.model');
const errorHandler = require('../../handler/error.handler');

const newLectureQuestion = async (req, res) => {
  try {
    const lectureQuestion = req.body;
    lectureQuestion.createdBy = req.user.imsMasterId;
    lectureQuestion.createdAt = new Date().getTime();
    lectureQuestion.editedAt = new Date().getTime();

    const newLectureQuestion = new LectureQuestion(lectureQuestion);

    await newLectureQuestion.save();

    res.status(200).send(newLectureQuestion);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newLectureQuestion;
