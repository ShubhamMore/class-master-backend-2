const mongoose = require('mongoose');
const studentCourseInstallmentReceiptSchema = new mongoose.Schema({
  studentCourseInstallmentId: {
    type: String,
    required: true,
  },
  courseInstallmentId: {
    type: String,
    required: true,
  },
  student: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  generatedBy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  lateFee: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  totalAmountInWords: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  bankDetails: {
    type: String,
    default: null,
  },
  transactionDetails: {
    type: String,
    default: null,
  },
  amountDue: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

studentCourseInstallmentReceiptSchema.methods.toJSON = function () {
  const studentCourseInstallmentReceipt = this;
  const studentCourseInstallmentReceiptObject = studentCourseInstallmentReceipt.toObject();

  delete studentCourseInstallmentReceiptObject.__v;

  return studentCourseInstallmentReceiptObject;
};

const StudentCourseInstallmentReceipt = mongoose.model(
  'StudentCourseInstallmentReceipt',
  studentCourseInstallmentReceiptSchema
);

module.exports = StudentCourseInstallmentReceipt;
