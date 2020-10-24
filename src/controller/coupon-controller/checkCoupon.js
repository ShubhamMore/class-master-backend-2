const Coupon = require('../../models/coupon.model');
const errorHandler = require('../../handler/error.handler');

const checkCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({
      code: req.body.code,
    });

    const status = !coupon;

    res.status(200).send({ status });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = checkCoupon;
