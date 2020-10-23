const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const StudentCourseInstallment = require('../../models/student-course-installment.model');
const InstitutePaymentReceipt = require('../../models/institute-payment-receipt.model');
const Budget = require('../../models/budget.model');
const mongoose = require('mongoose');
const errorHandler = require('../../handler/error.handler');
const numToWords = require('../../functions/numToWords');

const getDate = () => {
  const d = new Date();
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const generateStudentCourseInstallmentReceipt = async (req, res) => {
  try {
    const paymentReceipt = await InstitutePaymentReceipt.findById(req.body.receipt);

    if (!paymentReceipt || !paymentReceipt.status) {
      throw new Error('Payment Not Done');
    }

    studentCourseInstallment = await StudentCourseInstallment.findOne(
      { _id: mongoose.Types.ObjectId(paymentReceipt.studentInstallment) },
      {
        installments: {
          $elemMatch: { _id: mongoose.Types.ObjectId(paymentReceipt.installment) },
        },
      }
    );

    if (studentCourseInstallment.installments.length === 0) {
      throw new Error('Installment Not Found');
    }

    const courseInstallment = studentCourseInstallment.installments[0];

    const newStudentCourseInstallmentReceipt = {
      student: studentCourseInstallment.student,
      branch: studentCourseInstallment.branch,
      category: studentCourseInstallment.category,
      course: studentCourseInstallment.course,
      generatedBy: 'Self (Online Generated)',
      date: courseInstallment.installmentDate,
      amount: courseInstallment.installmentAmount,
      lateFee: 0,
      totalAmount: courseInstallment.installmentAmount,
      paymentDate: getDate(),
      paymentMode: 'online',
      description: '',
      bankDetails: 'Order Id: ' + req.body.order,
      transactionDetails: 'Receipt Id: ' + req.body.receipt,
      amountDue: 0,
    };

    newStudentCourseInstallmentReceipt.totalAmountInWords = await numToWords(
      newStudentCourseInstallmentReceipt.totalAmount
    );

    const studentCourseInstallmentReceipt = new StudentCourseInstallmentReceipt(
      newStudentCourseInstallmentReceipt
    );

    const saveStudentCourseInstallmentReceipt = studentCourseInstallmentReceipt.save();

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

    const saveStudentCourseInstallment = studentCourseInstallment.save();

    const budget = new Budget({
      receipt: studentCourseInstallmentReceipt._id,
      branch: studentCourseInstallmentReceipt.branch,
      generatedBy: studentCourseInstallmentReceipt.generatedBy,
      title: 'Student Fees',
      amount: studentCourseInstallmentReceipt.totalAmount,
      type: 'income',
      date: studentCourseInstallmentReceipt.paymentDate,
    });

    const saveBudget = budget.save();

    Promise.all([saveStudentCourseInstallmentReceipt, saveStudentCourseInstallment, saveBudget])
      .then((resData) => {
        res.status(201).send({ receiptId: studentCourseInstallmentReceipt._id });
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = generateStudentCourseInstallmentReceipt;
