const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const getExams = async (req, res) => {
  try {
    const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');

    const exam = await Exam.find({
      course: req.body.course,
      batch: req.body.batch,
      onlineExam: null,
      date: date,
    });

    res.status(200).send(exam);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getExams;
