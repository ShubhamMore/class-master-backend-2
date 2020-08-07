const Lecture = require('../../models/lecture.model');
const errorHandler = require('../../handler/error.handler');

const changeLectureStatus = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!lecture) {
      throw new Error('Lecture Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeLectureStatus;
