const mongoose = require('mongoose');
const receiptSchema = new mongoose.Schema({
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
  feeType: {
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
  paymentMode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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

receiptSchema.methods.toJSON = function () {
  const receipt = this;
  const receiptObject = receipt.toObject();

  delete receiptObject.__v;

  return receiptObject;
};

const receipt = mongoose.model('Receipt', receiptSchema);

module.exports = receipt;
