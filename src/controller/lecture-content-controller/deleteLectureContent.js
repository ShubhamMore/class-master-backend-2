const LectureContent = require('../../models/lecture-content.model');
const path = require('path');
const fs = require('fs');
const errorHandler = require('../../handler/error.handler');

const deleteLectureContent = async (req, res) => {
  try {
    const public_id = req.body.public_id;

    const lectureContent = await LectureContent.findOne({
      public_id,
    });

    if (!lectureContent) {
      throw new Error('No Lecture Content Found');
    }

    fs.unlink(path.join(__dirname, '../../../', public_id), (err) => {
      if (err) {
        throw new Error(err);
      }
    });

    await LectureContent.findOneAndRemove({
      public_id,
    });

    res.status(200).send({ success: true });
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = deleteLectureContent;
