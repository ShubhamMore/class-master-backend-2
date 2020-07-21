const StudentCourse = require('../../models/student-course.model');
const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const updateStudentCourse = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findByIdAndUpdate(
      req.body.studentCourse._id,
      req.body.studentCourse
    );

    if (!studentCourse) {
      throw new Error('No Student Course Found, Student Course Updation Failed');
    }

    const studentCourseInstallment = await StudentCourseInstallment.findByIdAndUpdate(
      req.body.studentCourseInstallment._id,
      req.body.studentCourseInstallment
    );

    if (!studentCourseInstallment) {
      throw new Error(
        'No Student Course Installment Found, Student Course Installment Updation Failed'
      );
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateStudentCourse;
