const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const getLectures = async (req, res) => {
  try {
    const query = {
      branch: req.body.branch,
      category: req.body.category,
      date: req.body.date,
    };

    if (req.body.course) {
      query.course = req.body.course;
    }

    if (req.body.batch) {
      query.batch = req.body.batch;
    }

    console.log(query);

    const lectures = await Schedule.find(query);

    res.status(200).send(lectures);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectures;
