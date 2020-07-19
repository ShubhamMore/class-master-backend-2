const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourses = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.find({ student: req.body.student });

    res.status(200).send(studentCourse);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourses;
