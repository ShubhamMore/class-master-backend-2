const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const changeStudentCourseStatus = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    if (!studentCourse) {
      throw new Error('No Student Course Found, Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeStudentCourseStatus;
