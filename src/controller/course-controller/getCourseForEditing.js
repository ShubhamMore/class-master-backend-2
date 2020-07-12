const Course = require('../../models/course.model');
const errorHandler = require('../../handler/error.handler');

const getCourseForEditing = async (req, res) => {
  try {
    const course = await Course.findById(req.body._id);
    if (!course) {
      throw new Error('No Course Found');
    }
    res.status(200).send(course);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCourseForEditing;
