const Course = require('../../models/course.model');
const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const editCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.body._id, req.body);
    if (!course) {
      throw new Error('Course Updation Failed');
    }
    if (course.courseType !== req.body.courseType) {
      await Student.updateMany(
        {
          branch: course.branch,
          course: course._id,
          courseType: course.courseType,
        },
        { courseType: req.body.courseType }
      );
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editCourse;
