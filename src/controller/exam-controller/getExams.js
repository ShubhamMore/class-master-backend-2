const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const getExams = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      batch: req.body.batch,
    };

    let date = null;

    if (req.body.year !== '' && req.body.month === '') {
      date = new RegExp('.*' + req.body.year + '.*');
    }

    if (req.body.month !== '' && req.body.year !== '') {
      date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
    }

    if (date) {
      searchQuery.date = date;
    }

    if (req.body.subject !== '') {
      searchQuery.subject = req.body.subject;
    }

    const exams = await Exam.find(searchQuery);

    res.status(200).send(exams);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getExams;
