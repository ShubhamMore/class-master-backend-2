const Coupon = require('../../models/coupon.model');
const errorHandler = require('../../handler/error.handler');

const getCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.body.id);
    if (!coupon) {
      throw new Error('No Coupon Found');
    }
    res.status(200).send(coupon);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCoupon;
