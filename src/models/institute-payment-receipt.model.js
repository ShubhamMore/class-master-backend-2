const mongoose = require('mongoose');

const institutePaymentReceiptSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPhone: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  studentInstallment: {
    type: String,
    required: true,
  },
  installment: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  orderId: {
    type: String,
    required: true,
  },
});

institutePaymentReceiptSchema.methods.toJSON = function () {
  const paymentReceipt = this;
  const paymentReceiptObject = paymentReceipt.toObject();

  delete paymentReceiptObject.__v;

  return paymentReceiptObject;
};

const InstitutePaymentReceipt = mongoose.model(
  'InstitutePaymentReceipt',
  institutePaymentReceiptSchema
);
module.exports = InstitutePaymentReceipt;
