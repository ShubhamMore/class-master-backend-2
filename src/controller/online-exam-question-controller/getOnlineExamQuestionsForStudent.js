const OnlineExam = require('../../models/online-exam.model');
const OnlineExamQuestion = require('../../models/online-exam-question.model');
const errorHandler = require('../../handler/error.handler');

const getOnlineExamQuestions = async (req, res) => {
  try {
    const onlineExam = await OnlineExam.findById(req.body.id);

    if (!onlineExam) {
      throw new Error('No Online Exam Available');
    }

    const onlineExamQuestions = await OnlineExamQuestion.find(
      {
        onlineExam: req.body.id,
        status: true,
      },
      {
        _id: 1,
        marks: 1,
        question: 1,
        'answers._id': 1,
        'answers.answer': 1,
      }
    );

    res.status(200).send(onlineExamQuestions);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getOnlineExamQuestions;
