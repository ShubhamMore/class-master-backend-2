const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const errorHandler = require('../../handler/error.handler');

const changeStudentCourseInstallmentReceiptStatus = async (req, res) => {
  try {
    const studentCourseInstallmentReceipt = await StudentCourseInstallmentReceipt.findByIdAndUpdate(
      req.body._id,
      {
        status: req.body.status,
      }
    );

    if (!studentCourseInstallmentReceipt) {
      throw new Error('StudentCourseInstallmentReceipt Status Updation Failed');
    }

    res.status(200).send(studentCourseInstallmentReceipt);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeStudentCourseInstallmentReceiptStatus;
