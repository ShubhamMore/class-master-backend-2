const DiscountAndOffer = require('../../models/discount-and-offer.model');
const errorHandler = require('../../handler/error.handler');

const CheckDiscountAndOffer = async (req, res) => {
  try {
    const discountAndOffer = await DiscountAndOffer.findOne({
      branch: req.body.branch,
      code: req.body.code,
    });

    const status = !discountAndOffer;

    res.status(200).send({ status });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = CheckDiscountAndOffer;
