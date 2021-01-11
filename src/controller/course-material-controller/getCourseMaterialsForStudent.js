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

    const courseMaterials = await CourseMaterial.find(searchQuery, {
      _id: 1,
      title: 1,
      subject: 1,
      fileName: 1,
      fileType: 1,
      secureUrl: 1,
      createdAt: 1,
    });

    res.status(200).send(courseMaterials);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCourseMaterialsForStudent;
