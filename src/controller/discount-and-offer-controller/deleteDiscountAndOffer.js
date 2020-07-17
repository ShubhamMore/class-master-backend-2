const DiscountAndOffer = require('../../models/discount-and-offer.model');
const errorHandler = require('../../handler/error.handler');

const deleteDiscountAndOffer = async (req, res) => {
  try {
    const discountAndOffer = await DiscountAndOffer.findByIdAndUpdate(req.body.id, req.body);

    if (!discountAndOffer) {
      throw new Error('Discount And Offer not Found');
    }

    res.status(200).send(discountAndOffer);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteDiscountAndOffer;
