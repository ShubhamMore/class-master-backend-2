const mongoose = require('mongoose');
const couponCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  discountType: {
    type: String,
    required: true,
  },
  discountAmount: {
    type: String,
    required: false,
  },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
  expiryDate: {
    type: String,
    required: false,
  },
});

couponCodeSchema.methods.toJSON = function () {
  const couponCode = this;
  const couponCodeObject = couponCode.toObject();

  delete couponCodeObject.__v;

  return couponCodeObject;
};

const CouponCode = mongoose.model('CouponCode', couponCodeSchema);

module.exports = CouponCode;
