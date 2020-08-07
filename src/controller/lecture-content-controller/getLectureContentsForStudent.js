const Lecture = require('../../models/lecture.model');
const LectureContent = require('../../models/lecture-content.model');
const errorHandler = require('../../handler/error.handler');

const getLectureContentsForStudent = async (req, res) => {
  try {
    const lectureContents = await LectureContent.find({
      lecture: req.body._id,
      status: true,
    });

    res.status(200).send(lectureContents);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureContentsForStudent;
