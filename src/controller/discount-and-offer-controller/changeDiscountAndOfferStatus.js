const DiscountAndOffer = require('../../models/discount-and-offer.model');
const errorHandler = require('../../handler/error.handler');

const changeDiscountAndOfferStatus = async (req, res) => {
  try {
    const discountAndOffer = await DiscountAndOffer.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!discountAndOffer) {
      throw new Error('Discount And Offer not Found, Status updation Failed');
    }

    res.status(200).send(discountAndOffer);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeDiscountAndOfferStatus;
