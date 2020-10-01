const LectureMaterial = require('../../models/lecture-material.model');
const path = require('path');
const fs = require('fs');
const errorHandler = require('../../handler/error.handler');

const deleteLectureMaterial = async (req, res) => {
  try {
    const lectureMaterial = await LectureMaterial.findById(req.body.id);

    if (!lectureMaterial) {
      throw new Error('No Lecture Material Found');
    }
    const publicId = lectureMaterial.publicId;

    fs.unlink(path.join(__dirname, '../../../', publicId), (err) => {
      if (err) {
        throw new Error(err);
      }
    });

    await LectureMaterial.findByIdAndDelete(req.body.id);

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteLectureMaterial;
