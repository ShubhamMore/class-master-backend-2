const Coupon = require('../../models/coupon.model');
const errorHandler = require('../../handler/error.handler');

const newCoupon = async (req, res) => {
  try {
    const coupon = new Coupon(req.body);
    await coupon.save();

    res.status(201).send(coupon);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newCoupon;
