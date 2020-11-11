const OnlineExam = require('../../models/online-exam.model');
const errorHandler = require('../../handler/error.handler');

const getOnlineExamsForStudent = async (req, res) => {
  try {
    const query = {
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      batch: req.body.batch,
      status: true,
    };

    if (req.body.subject && req.body.subject !== '') {
      query.subject = req.body.subject;
    }

    let date = null;

    if (req.body.year !== '' && req.body.month === '') {
      date = new RegExp('.*' + req.body.year + '.*');
    }

    if (req.body.month !== '' && req.body.year !== '') {
      date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
    }

    if (date) {
      query.date = date;
    }

    const onlineExams = await OnlineExam.find(query);

    res.status(200).send(onlineExams);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getOnlineExamsForStudent;
