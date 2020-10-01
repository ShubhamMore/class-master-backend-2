const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const StudentCourseInstallment = require('../../models/student-course-installment.model');
const mongoose = require('mongoose');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const numToWords = require('../../functions/numToWords');

const newStudentCourseInstallmentReceipt = async (req, res) => {
  try {
    req.body.totalAmountInWords = await numToWords(req.body.totalAmount);

    const studentCourseInstallmentReceipt = new StudentCourseInstallmentReceipt(req.body);

    await studentCourseInstallmentReceipt.save();

    const studentCourseInstallment = await StudentCourseInstallment.findById(
      studentCourseInstallmentReceipt.studentCourseInstallmentId
    );

    const installmentIndex = studentCourseInstallment.installments.findIndex(
      (installment) => installment._id == studentCourseInstallmentReceipt.courseInstallmentId
    );

    const amountCollected =
      studentCourseInstallment.amountCollected + studentCourseInstallmentReceipt.amount;

    studentCourseInstallment.amountCollected = amountCollected;
    studentCourseInstallment.pendingAmount = studentCourseInstallment.totalAmount - amountCollected;
    studentCourseInstallment.installments[
      installmentIndex
    ].receiptId = studentCourseInstallmentReceipt._id.toString();

    await studentCourseInstallment.save();

    // await StudentCourseInstallment.update(
    //   {
    //     _id: mongoose.Types.ObjectId(studentCourseInstallmentReceipt.studentCourseInstallmentId),
    //     'installments._id': mongoose.Types.ObjectId(
    //       studentCourseInstallmentReceipt.courseInstallmentId
    //     ),
    //   },
    //   {
    //     $set: { 'installments.$.receiptId': studentCourseInstallmentReceipt._id.toString() },
    //   }
    // );

    // const budget = new Budget({
    //   studentCourseInstallmentReceipt: studentCourseInstallmentReceipt._id,
    //   branch: studentCourseInstallmentReceipt.branch,
    //   generatedBy: studentCourseInstallmentReceipt.generatedBy,
    //   title: 'Student Fees',
    //   amount: studentCourseInstallmentReceipt.totalAmount,
    //   type: '1',
    //   date: studentCourseInstallmentReceipt.date,
    // });
    // await budget.save();
    res.status(201).send({ receiptId: studentCourseInstallmentReceipt._id });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newStudentCourseInstallmentReceipt;
