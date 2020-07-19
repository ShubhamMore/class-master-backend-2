const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourseForEditing = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findById(req.body.id);
    if (!studentCourse) {
      throw new Error('No Student Course Found');
    }

    res.status(200).send(studentCourse);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseForEditing;
