const OnlineExam = require('../../models/online-exam.model');
const errorHandler = require('../../handler/error.handler');

const getOnlineExamForEditing = async (req, res) => {
  try {
    const onlineExam = await OnlineExam.findById(req.body._id);
    if (!onlineExam) {
      throw new Error('No Online Exam Found');
    }

    res.status(200).send(onlineExam);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getOnlineExamForEditing;
