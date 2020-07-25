const CourseMaterial = require('../../models/course-material.model');
const errorHandler = require('../../handler/error.handler');

const getCourseMaterial = async (req, res) => {
  try {
    const courseMaterial = await CourseMaterial.findById(req.body._id);

    if (!courseMaterial) {
      throw new Error('No Course Material');
    }

    res.status(200).send(courseMaterial);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCourseMaterial;
