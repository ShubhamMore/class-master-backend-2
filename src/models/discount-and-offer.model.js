const mongoose = require('mongoose');

const discountAndOfferSchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
  },
  offerName: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  discountType: {
    type: String,
    required: true,
  },
  discountAmount: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  termsAndConditions: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

discountAndOfferSchema.methods.toJSON = function () {
  const discountAndOffer = this;
  const discountAndOfferObject = discountAndOffer.toObject();

  delete discountAndOfferObject.__v;

  return discountAndOfferObject;
};

discountAndOfferSchema.pre('remove', async function (next) {
  const discountAndOffer = this;
  await Batch.deleteMany({ discountAndOffer: discountAndOffer._id });
  next();
});

const DiscountAndOffer = mongoose.model('DiscountAndOffer', discountAndOfferSchema);

module.exports = DiscountAndOffer;
