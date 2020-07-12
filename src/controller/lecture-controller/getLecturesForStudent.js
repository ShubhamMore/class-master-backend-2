const Lecture = require('../../models/lecture.model');
const errorHandler = require('../../handler/error.handler');

const getLecturesForStudent = async (req, res) => {
  try {
    const lecture = await Lecture.find({
      course: req.body.course,
      batch: req.body.batch,
      status: '1',
    });

    res.status(200).send(lecture);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLecturesForStudent;
