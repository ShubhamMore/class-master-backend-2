const Lecture = require('../../models/lecture.model');
const errorHandler = require('../../handler/error.handler');

const editLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndUpdate(req.body._id, req.body);

    if (!lecture) {
      throw new Error('Lecture Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editLecture;
