const DiscountAndOffer = require('../../models/discount-and-offer.model');
const errorHandler = require('../../handler/error.handler');

const newDiscountAndOffer = async (req, res) => {
  try {
    const discountAndOffer = new DiscountAndOffer(req.body);
    await discountAndOffer.save();

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newDiscountAndOffer;
