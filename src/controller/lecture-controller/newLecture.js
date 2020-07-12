const Lecture = require('../../models/lecture.model');
const errorHandler = require('../../handler/error.handler');

const newLecture = async (req, res) => {
  try {
    const lecture = new Lecture(req.body);
    await lecture.save();

    const data = {
      success: true,
    };
    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newLecture;
