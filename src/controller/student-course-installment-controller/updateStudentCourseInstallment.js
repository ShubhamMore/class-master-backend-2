const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const updateStudentCourseInstallment = async (req, res) => {
  try {
    const studentCourseInstallment = await StudentCourseInstallment.findByIdAndUpdate(
      req.body.id,
      req.body
    );

    if (!studentCourseInstallment) {
      throw new Error('No Student CourseInstallment Found, Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateStudentCourseInstallment;
