const OnlineExam = require('../../models/online-exam.model');
const OnlineExamQuestion = require('../../models/online-exam-question.model');
const errorHandler = require('../../handler/error.handler');

const deleteOnlineExam = async (req, res) => {
  try {
    const onlineExam = await OnlineExam.findByIdAndDelete(req.body._id);
    if (!onlineExam) {
      throw new Error('No Online Exam Found');
    }

    await OnlineExamQuestion.deleteMany({ onlineExam: onlineExam._id });

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteOnlineExam;
