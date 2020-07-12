const LectureContent = require('../../models/lecture-content.model');
const errorHandler = require('../../handler/error.handler');

const changeLectureContentStatus = async (req, res) => {
  try {
    const lectureContent = await LectureContent.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    });

    if (!lectureContent) {
      throw new Error('Lecture Content Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeLectureContentStatus;
