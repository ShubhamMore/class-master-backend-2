const OnlineExam = require('../../models/online-exam.model');
const errorHandler = require('../../handler/error.handler');

const getOnlineExams = async (req, res) => {
  try {
    const onlineExams = await OnlineExam.find({
      branch: req.body.branch,
      course: req.body.course,
      batch: req.body.batch,
    });

    res.status(200).send(onlineExams);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getOnlineExams;
