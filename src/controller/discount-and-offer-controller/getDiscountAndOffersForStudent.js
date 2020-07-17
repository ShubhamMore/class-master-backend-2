const DiscountAndOffer = require('../../models/discount-and-offer.model');
const errorHandler = require('../../handler/error.handler');

const getDiscountAndOffersForStudent = async (req, res) => {
  try {
    const date = new date();

    const currentDate = `${date.getFullYear().toString()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDay().toString().padStart(2, '0')}`;

    const discountAndOffers = await DiscountAndOffer.find({
      branch: req.body.branch,
      startDate: { $lte: currentDate },
      $or: [
        {
          expiryDate: { $gte: currentDate },
        },
        { expiryDate: null },
      ],
      status: true,
    });

    res.status(200).send(discountAndOffers);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getDiscountAndOffersForStudent;
