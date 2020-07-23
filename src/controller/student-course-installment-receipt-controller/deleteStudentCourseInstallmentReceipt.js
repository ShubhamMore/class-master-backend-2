const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const StudentCourseInstallment = require('../../models/student-course-installment.model');

const Student = require('../../models/student.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const deleteStudentCourseInstallmentReceipt = async (req, res) => {
  try {
    const studentCourseInstallmentReceipt = await StudentCourseInstallmentReceipt.findByIdAndDelete(
      req.body.id
    );

    if (!studentCourseInstallmentReceipt) {
      throw new Error('No Receipt Found, Receipt Deletion Failed');
    }

    const studentCourseInstallment = await StudentCourseInstallment.findById(
      studentCourseInstallmentReceipt.studentCourseInstallmentId
    );

    const installmentIndex = studentCourseInstallment.installments.findIndex(
      (installment) => installment._id == studentCourseInstallmentReceipt.courseInstallmentId
    );

    const amountCollected =
      studentCourseInstallment.amountCollected - studentCourseInstallmentReceipt.amount;
    const pendingAmount =
      installmentIndex !== 0
        ? studentCourseInstallment.installments[installmentIndex - 1].amountPending
        : studentCourseInstallment.totalAmount;

    studentCourseInstallment.amountCollected = amountCollected;
    studentCourseInstallment.pendingAmount = studentCourseInstallment.totalAmount - amountCollected;
    studentCourseInstallment.installments[installmentIndex].receiptId = null;

    await studentCourseInstallment.save();

    // await StudentCourseInstallment.update(
    //   {
    //     _id: mongoose.Types.ObjectId(studentCourseInstallmentReceipt.studentCourseInstallmentId),
    //     'installments._id': mongoose.Types.ObjectId(
    //       studentCourseInstallmentReceipt.courseInstallmentId
    //     ),
    //   },
    //   {
    //     $set: { 'installments.$.receiptId': null },
    //   }
    // );

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteStudentCourseInstallmentReceipt;
