const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const Student = require('../../models/student.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const deleteStudentCourseInstallmentReceipt = async (req, res) => {
  try {
    const studentCourseInstallmentReceipt = await StudentCourseInstallmentReceipt.findByIdAndDelete(
      req.body._id
    );
    if (studentCourseInstallmentReceipt.feeType !== '2') {
      const student = await Student.findById(studentCourseInstallmentReceipt.student);
      const paidAmount =
        parseInt(student.paidAmount) - parseInt(studentCourseInstallmentReceipt.amount);
      const amountDue =
        parseInt(student.amountDue) + parseInt(studentCourseInstallmentReceipt.amount);
      await Student.findByIdAndUpdate(student._id, {
        paidAmount,
        amountDue,
      });
    }
    await Budget.findOneAndDelete({
      studentCourseInstallmentReceipt: studentCourseInstallmentReceipt._id,
    });
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteStudentCourseInstallmentReceipt;
