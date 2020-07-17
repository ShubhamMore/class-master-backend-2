const mongoose = require('mongoose');

const discountAndOfferSchema = new mongoose.Schema({
  branch: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
  },
  discountType: {
    type: String,
    require: true,
  },
  discountAmount: {
    type: String,
    require: true,
  },
  startDate: {
    type: String,
    require: true,
  },
  expiryDate: {
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
