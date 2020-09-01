const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const changeExamStatus = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.body._id, req.body.status);

    if (!exam) {
      throw new Error('No Exam Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeExamStatus;
