const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourseInstallmentReceipt = async (req, res) => {
  try {
    const studentCourseInstallmentReceipt = await StudentCourseInstallmentReceipt.findById(
      req.body._id
    );
    res.status(200).send(studentCourseInstallmentReceipt);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseInstallmentReceipt;
