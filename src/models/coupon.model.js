const mongoose = require('mongoose');
const couponSchema = new mongoose.Schema({
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
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  termsAndConditions: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

couponSchema.methods.toJSON = function () {
  const coupon = this;
  const couponObject = coupon.toObject();

  delete couponObject.__v;

  return couponObject;
};

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
