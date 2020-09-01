const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const saveStudentsMarks = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.body.id, { marks: req.body.marks });

    if (!exam) {
      throw new Error('No Exam Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveStudentsMarks;
