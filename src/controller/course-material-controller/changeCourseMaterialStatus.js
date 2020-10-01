const CourseMaterial = require('../../models/course-material.model');
const errorHandler = require('../../handler/error.handler');

const changeCourseMaterialStatus = async (req, res) => {
  try {
    const courseMaterial = await CourseMaterial.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!courseMaterial) {
      throw new Error('Course Material Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeCourseMaterialStatus;
