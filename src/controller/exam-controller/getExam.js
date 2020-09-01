const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const getExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.body.id);

    if (!exam) {
      throw new Error('No Exam Found');
    }

    res.status(200).send(exam);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getExam;
