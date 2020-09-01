const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndRemove(req.body.id);

    if (!exam) {
      throw new Error('No Exam Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteExam;
