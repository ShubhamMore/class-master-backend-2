const DiscountAndOffer = require('../../models/discount-and-offer.model');
const errorHandler = require('../../handler/error.handler');

const updateDiscountAndOffer = async (req, res) => {
  try {
    let discountAndOffer = await DiscountAndOffer.findById(req.body._id);

    if (!discountAndOffer) {
      throw new Error('Discount And Offer not Found');
    }

    if (discountAndOffer.code !== req.body.code) {
      const discountAndOfferCode = await DiscountAndOffer.findOne({
        branch: req.body.branch,
        code: req.body.code,
      });
      if (discountAndOfferCode) {
        throw new Error(`Offer Code ${req.body.code} Already Exist`);
      }
    }

    await DiscountAndOffer.findByIdAndUpdate(req.body._id, req.body);

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateDiscountAndOffer;
