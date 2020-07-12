const Course = require('../../models/course.model');
const errorHandler = require('../../handler/error.handler');

const getCoursesByBranch = async (req, res) => {
  try {
    const courses = await Course.find({
      branch: req.body.branch,
      courseType: req.body.courseType,
    });
    res.status(200).send(courses);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCoursesByBranch;
