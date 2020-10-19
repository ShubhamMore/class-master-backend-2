const LectureMaterial = require('../../models/lecture-material.model');
const errorHandler = require('../../handler/error.handler');

const getLectureMaterialsForStudent = async (req, res) => {
  try {
    const lectureMaterials = await LectureMaterial.find({
      lecture: req.body.lecture,
      status: true,
    });

    res.status(200).send(lectureMaterials);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureMaterialsForStudent;
