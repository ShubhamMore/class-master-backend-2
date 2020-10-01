const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const errorHandler = require('../../handler/error.handler');

const editStudentCourseInstallmentReceipt = async (req, res) => {
  try {
    const studentCourseInstallmentReceipt = await StudentCourseInstallmentReceipt.findByIdAndUpdate(
      req.body._id,
      req.body
    );

    if (!studentCourseInstallmentReceipt) {
      throw new Error('Receipt Not Available, Receipt updation Failed.');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editStudentCourseInstallmentReceipt;
