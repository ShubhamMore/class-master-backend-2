const CourseMaterial = require('../../models/course-material.model');
const errorHandler = require('../../handler/error.handler');

const getCourseMaterialsForStudent = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      status: true,
    };

    if (req.body.subject && req.body.subject !== '') {
      searchQuery.subject = req.body.subject;
    }

    res.status(200).send(courseMaterials);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCourseMaterialsForStudent;
