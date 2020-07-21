const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourses = async (req, res) => {
  try {
    const studentCourses = await StudentCourse.find({
      branch: req.body.branch,
      category: req.body.category,
      student: req.body.student,
    });

    res.status(200).send(studentCourses);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourses;
