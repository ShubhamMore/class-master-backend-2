const Coupon = require('../../models/coupon.model');

const errorHandler = require('../../handler/error.handler');

const changeCouponStatus = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    if (!coupon) {
      throw new Error(
        `Coupon ${req.body.status ? 'Activation' : 'Deactivation'}  Failed, No Coupon Found`
      );
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeCouponStatus;
