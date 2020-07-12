const LectureContent = require('../../models/lecture-content.model');
const errorHandler = require('../../handler/error.handler');

const getLectureContent = async (req, res) => {
  try {
    const lectureContent = await LectureContent.findById(req.body._id);

    if (!lectureContent) {
      throw new Error('No Content Available');
    }

    res.status(200).send(lectureContent);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureContent;
