const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const Student = require('../../models/student.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const numToWords = require('../../functions/numToWords');

const newStudentCourseInstallmentReceipt = async (req, res) => {
  try {
    const studentCourseInstallmentReceipt = new StudentCourseInstallmentReceipt(req.body);
    studentCourseInstallmentReceipt.totalAmountInWords = await numToWords(
      studentCourseInstallmentReceipt.totalAmount
    );

    if (studentCourseInstallmentReceipt.feeType !== '2') {
      const student = await Student.findById(studentCourseInstallmentReceipt.student);
      const paidAmount =
        parseInt(student.paidAmount) + parseInt(studentCourseInstallmentReceipt.amount);
      const amountDue =
        parseInt(student.amountDue) - parseInt(studentCourseInstallmentReceipt.amount);
      await Student.findByIdAndUpdate(student._id, {
        paymentType: amountDue === 0 ? null : studentCourseInstallmentReceipt.feeType,
        paidAmount,
        amountDue,
      });
    }
    await studentCourseInstallmentReceipt.save();
    const budget = new Budget({
      studentCourseInstallmentReceipt: studentCourseInstallmentReceipt._id,
      branch: studentCourseInstallmentReceipt.branch,
      generatedBy: studentCourseInstallmentReceipt.generatedBy,
      title: 'Student Fees',
      amount: studentCourseInstallmentReceipt.totalAmount,
      type: '1',
      date: studentCourseInstallmentReceipt.date,
    });
    await budget.save();
    res.status(201).send({ _id: studentCourseInstallmentReceipt._id });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newStudentCourseInstallmentReceipt;
