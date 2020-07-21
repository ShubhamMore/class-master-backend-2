const StudentCourse = require('../../models/student-course.model');
const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourseForEditing = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findById(req.body.id);
    if (!studentCourse) {
      throw new Error('No Student Course Found');
    }
    const studentCourseInstallment = await StudentCourseInstallment.findById(
      studentCourse.studentCourseInstallment
    );

    res.status(200).send({ studentCourse, studentCourseInstallment });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseForEditing;
