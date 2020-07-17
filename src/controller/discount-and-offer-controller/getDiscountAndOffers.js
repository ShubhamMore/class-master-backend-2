const DiscountAndOffer = require('../../models/discount-and-offer.model');
const errorHandler = require('../../handler/error.handler');

const getDiscountAndOffers = async (req, res) => {
  try {
    const discountAndOffers = await DiscountAndOffer.find({ branch: req.body.branch });

    res.status(200).send(discountAndOffers);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getDiscountAndOffers;
