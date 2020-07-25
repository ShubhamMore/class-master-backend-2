const CourseMaterial = require('../../models/course-material.model');
const path = require('path');
const fs = require('fs');
const errorHandler = require('../../handler/error.handler');

const deleteCourseMaterial = async (req, res) => {
  try {
    const courseMaterial = await CourseMaterial.findById(req.body.id);

    if (!courseMaterial) {
      throw new Error('No Course Material Found');
    }
    const publicId = courseMaterial.publicId;

    fs.unlink(path.join(__dirname, '../../../', publicId), (err) => {
      if (err) {
        throw new Error(err);
      }
    });

    await CourseMaterial.findByIdAndDelete(req.body.id);

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteCourseMaterial;
