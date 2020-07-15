const mongoose = require('mongoose');

const paymentReceiptSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  userPhone: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  planType: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  orderId: {
    type: String,
    require: true,
  },
});

paymentReceiptSchema.methods.toJSON = function () {
  const paymentReceipt = this;
  const paymentReceiptObject = paymentReceipt.toObject();

  delete paymentReceiptObject.__v;

  return paymentReceiptObject;
};

const PaymentReceipt = mongoose.model('PaymentReceipt', paymentReceiptSchema);
module.exports = PaymentReceipt;
