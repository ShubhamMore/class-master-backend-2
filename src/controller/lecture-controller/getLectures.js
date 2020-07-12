const Lecture = require('../../models/lecture.model');
const errorHandler = require('../../handler/error.handler');

const getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find({
      branch: req.body.branch,
      course: req.body.course,
      batch: req.body.batch,
    });

    res.status(200).send(lectures);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectures;
