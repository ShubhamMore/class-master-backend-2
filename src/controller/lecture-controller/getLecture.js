const Lecture = require('../../models/lecture.model');
const errorHandler = require('../../handler/error.handler');

const getLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.body._id);
    if (!lecture) {
      throw new Error('No lecture Found');
    }

    res.status(200).send(lecture);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLecture;
