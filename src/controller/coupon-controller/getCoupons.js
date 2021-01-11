const Coupon = require('../../models/coupon.model');
const errorHandler = require('../../handler/error.handler');

const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    res.status(200).send(coupons);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCoupons;
