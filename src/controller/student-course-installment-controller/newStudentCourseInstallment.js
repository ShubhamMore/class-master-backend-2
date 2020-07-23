const StudentCourseInstallment = require('../../models/student-course-installment.model');
const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const newStudentCourseInstallment = async (req, res) => {
  try {
    const studentCourseInstallment = new StudentCourseInstallment(
      req.body.studentCourseInstallment
    );
    await studentCourseInstallment.save();

    await StudentCourse.findByIdAndUpdate(req.body.studentCourse, {
      studentCourseInstallment: studentCourseInstallment._id,
    });

    res.status(201).send({ success: true });
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = newStudentCourseInstallment;
