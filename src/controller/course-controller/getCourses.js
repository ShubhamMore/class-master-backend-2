const Course = require('../../models/course.model');
const errorHandler = require('../../handler/error.handler');

const getCourses = async (req, res) => {
  try {
    console.lgo('c');
    const courses = await Course.find({
      branch: req.body.branch,
      category: req.body.category,
    });
    res.status(200).send(courses);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCourses;
