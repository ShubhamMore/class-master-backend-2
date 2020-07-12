const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const saveExam = async (req, res) => {
  try {
    const exam = new Exam(req.body);

    await exam.save();

    res.status(200).send(exam);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveExam;
