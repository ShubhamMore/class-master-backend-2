const CourseMaterial = require('../../models/course-material.model');
const errorHandler = require('../../handler/error.handler');

const getCourseMaterials = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
    };

    if (req.body.subject && req.body.subject !== '') {
      searchQuery.subject = req.body.subject;
    }

    const courseMaterials = await CourseMaterial.find(searchQuery);

    res.status(200).send(courseMaterials);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCourseMaterials;
