const Lecture = require('../../models/lecture.model');
const errorHandler = require('../../handler/error.handler');

const getLectures = async (req, res) => {
  try {
    const query = {
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
    };

    if (req.body.batch) {
      query.batch = req.body.batch;
    }

    const lectures = await Lecture.find(query);

    res.status(200).send(lectures);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectures;
