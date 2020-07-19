const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const changeStudentCourseInstallmentStatus = async (req, res) => {
  try {
    const studentCourseInstallment = await StudentCourseInstallment.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!studentCourseInstallment) {
      throw new Error('No Student Course Installment Found, Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeStudentCourseInstallmentStatus;
