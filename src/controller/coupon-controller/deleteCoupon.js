const Coupon = require('../../models/coupon.model');
const errorHandler = require('../../handler/error.handler');

const deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.body.id);
    if (!coupon) {
      throw new Error('Coupon not found, Coupon Deletion Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteCoupon;
