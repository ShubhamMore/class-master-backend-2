const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const editExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.body._id, req.body.exam);

    if (!exam) {
      throw new Error('No Exam Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editExam;
