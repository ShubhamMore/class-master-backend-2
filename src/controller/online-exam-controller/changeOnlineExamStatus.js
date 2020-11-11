const OnlineExam = require('../../models/online-exam.model');
const errorHandler = require('../../handler/error.handler');

const changeOnlineExamStatus = async (req, res) => {
  try {
    const onlineExam = await OnlineExam.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!onlineExam) {
      throw new Error('Online Exam Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeOnlineExamStatus;
