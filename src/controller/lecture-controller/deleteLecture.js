const LectureContent = require('../../models/lecture-content.model');
const Lecture = require('../../models/lecture.model');
const path = require('path');
const fs = require('fs');
const errorHandler = require('../../handler/error.handler');

const deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndDelete(req.body.id);
    if (!lecture) {
      throw new Error('No Lecture Found');
    }
    const lectureContents = await LectureContent.find({
      lecture: lecture._id,
    });
    await LectureContent.deleteMany({ lecture: lecture._id });

    const n = lectureContents.length;
    for (let i = 0; i < n; i++) {
      const lectureContentToDelete = lectureContents[i].publicId;
      fs.unlink(path.join(__dirname, '../../../', lectureContentToDelete), (err) => {
        if (err) {
          throw new Error(err);
        }
      });
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteLecture;
