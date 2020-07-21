const StudentCourse = require('../../models/student-course.model');
const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const newStudentCourse = async (req, res) => {
  try {
    const studentCourse = new StudentCourse(req.body.studentCourse);
    await studentCourse.save();

    const studentCourseInstallment = new StudentCourseInstallment(
      req.body.studentCourseInstallment
    );
    await studentCourseInstallment.save();

    await StudentCourse.findByIdAndUpdate(studentCourse._id, {
      studentCourseInstallment: studentCourseInstallment._id,
    });

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newStudentCourse;
