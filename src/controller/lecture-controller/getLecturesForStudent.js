const Lecture = require('../../models/lecture.model');
const errorHandler = require('../../handler/error.handler');

const getLecturesForStudent = async (req, res) => {
  try {
    const lecture = await Lecture.find({
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      batch: req.body.batch,
      status: true,
    });

    res.status(200).send(lecture);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLecturesForStudent;
