const LectureMaterial = require('../../models/lecture-material.model');
const errorHandler = require('../../handler/error.handler');

const getLectureMaterials = async (req, res) => {
  try {
    const lectureMaterials = await LectureMaterial.find({
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      batch: req.body.batch,
      lecture: req.body.lecture,
    });

    res.status(200).send(lectureMaterials);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLectureMaterials;
