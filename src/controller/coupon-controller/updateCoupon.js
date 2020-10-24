const Coupon = require('../../models/coupon.model');
const errorHandler = require('../../handler/error.handler');

const updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.body._id, req.body);
    if (!coupon) {
      throw new Error('Coupon not found, Coupon Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateCoupon;
