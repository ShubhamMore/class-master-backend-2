const LectureQuestion = require('../../models/lecture-question.model');
const errorHandler = require('../../handler/error.handler');

const editLectureQuestion = async (req, res) => {
  try {
    const lectureQuestion = await LectureQuestion.findById(req.body._id);

    if (!lectureQuestion) {
      throw new Error('Question Not Found');
    }

    if (lectureQuestion.createdBy !== req.user.imsMasterId) {
      throw new Error('You are not Authorized to edit This Question.');
    }

    await LectureQuestion.findByIdAndUpdate(req.body._id, req.body);

    res.status(200).send(lectureQuestion);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editLectureQuestion;
