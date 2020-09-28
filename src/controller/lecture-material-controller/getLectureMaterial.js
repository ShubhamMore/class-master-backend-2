const LectureMaterial = require('../../models/lecture-material.model');
const errorHandler = require('../../handler/error.handler');

const getLectureMaterial = async (req, res) => {
  try {
    const lectureMaterial = await LectureMaterial.findById(req.body.id);

    if (!lectureMaterial) {
      throw new Error('No Lecture Material Available');
    }

    res.status(200).send(lectureMaterial);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureMaterial;
