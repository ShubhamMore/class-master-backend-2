const Course = require('../../models/course.model');
const errorHandler = require('../../handler/error.handler');

const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.body._id, req.body);
    if (!course) {
      throw new Error('Course not found, Course Updation Failed');
    }
   
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateCourse;
