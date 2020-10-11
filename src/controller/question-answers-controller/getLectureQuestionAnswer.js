const LectureQuestion = require('../../models/lecture-question.model');
const mongoose = require('mongoose');
const errorHandler = require('../../handler/error.handler');

const getLectureQuestionAnswer = async (req, res) => {
  try {
    const lectureQuestionAnswers = LectureQuestion.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.id),
        },
      },
      {
        $lookup: {
          from: 'lecturequestionanswers',
          localField: '_id', // field in the lectureQuestions collection
          foreignField: 'question', // field in the lectureQuestionAnswers collection
          as: 'answers',
        },
      },
    ]);

    if (!lectureQuestionAnswers[0]) {
      throw new Error('No Lecture Question Available');
    }

    res.status(200).send(lectureQuestionAnswers[0]);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureQuestionAnswer;
