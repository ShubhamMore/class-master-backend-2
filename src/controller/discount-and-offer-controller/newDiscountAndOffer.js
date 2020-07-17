const DiscountAndOffer = require('../../models/discount-and-offer.model');
const errorHandler = require('../../handler/error.handler');

const newDiscountAndOffer = async (req, res) => {
  try {
    const discountAndOffer = await DiscountAndOffer.findOne({
      branch: req.body.branch,
      code: req.body.code,
    });

    if (discountAndOffer) {
      throw new Error(`Offer Code ${req.body.code} Already Exist`);
    }

    await new DiscountAndOffer(req.body).save();

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newDiscountAndOffer;
