const Lecture = require('../../models/lecture.model');
const LectureContent = require('../../models/lecture-content.model');
const errorHandler = require('../../handler/error.handler');

const getLectureContentsForStudent = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.body._id);
    if (!lecture) {
      throw new Error('No Lecture Available');
    }

    const lectureContents = await LectureContent.find({
      lecture: req.body._id,
      status: '1',
    });

    res.status(200).send({ lecture, lectureContents });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureContentsForStudent;
