const DiscountAndOffer = require('../../models/discount-and-offer.model');
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

const getDiscountAndOffers = async (req, res) => {
  try {
    const date = getDate();

    const discountAndOffers = await DiscountAndOffer.aggregate([
      {
        $match: {
          branch: req.body.branch,
          $expr: {
            $and: [
              {
                $lte: ['$startDate', date],
              },
              {
                $gte: ['$expiryDate', date],
              },
            ],
          },
        },
      },
    ]);

    res.status(200).send(discountAndOffers);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getDiscountAndOffers;
