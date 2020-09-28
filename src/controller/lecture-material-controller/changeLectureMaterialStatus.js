const LectureMaterial = require('../../models/lecture-material.model');
const errorHandler = require('../../handler/error.handler');

const changeLectureMaterialStatus = async (req, res) => {
  try {
    const lectureMaterial = await LectureMaterial.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!lectureMaterial) {
      throw new Error('Lecture Material Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeLectureMaterialStatus;
