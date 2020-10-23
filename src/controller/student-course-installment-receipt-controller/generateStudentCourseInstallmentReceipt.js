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

    const courseInstallment = await StudentCourseInstallment.findOne(
      { _id: mongoose.Types.ObjectId(paymentReceipt.studentInstallment) },
      {
        _id: 1,
        branch: 1,
        category: 1,
        course: 1,
        student: 1,
        installments: {
          $elemMatch: { _id: mongoose.Types.ObjectId(paymentReceipt.installment) },
        },
      }
    );

    if (courseInstallment.installments.length === 0) {
      throw new Error('Installment Not Found');
    }

    const installment = courseInstallment.installments[0];

    const newStudentCourseInstallmentReceipt = {
      description: '',
      bankDetails: 'Order Id: ' + req.body.order,
      transactionDetails: 'Receipt Id: ' + req.body.receipt,
      generatedBy: 'Self (Online Generated)',
      date: installment.installmentDate,
      amount: installment.installmentAmount,
      lateFee: 0,
      totalAmount: installment.installmentAmount,
      paymentDate: getDate(),
      paymentMode: 'online',
      amountDue: installment.amountPending,
      studentCourseInstallmentId: courseInstallment._id,
      courseInstallmentId: installment._id,
      branch: courseInstallment.branch,
      category: courseInstallment.category,
      course: courseInstallment.course,
      student: courseInstallment.student,
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
