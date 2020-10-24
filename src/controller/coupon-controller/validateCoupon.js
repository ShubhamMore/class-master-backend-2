const Coupon = require('../../models/coupon.model');
const errorHandler = require('../../handler/error.handler');

const getDate = () => {
  const d = new Date();
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const validateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ code: req.body.code });
    if (!coupon) {
      throw new Error('Coupon not found');
    }

    const date = getDate();

    if (date > coupon.expiryDate) {
      throw new Error('This Coupon is Expired');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = validateCoupon;
