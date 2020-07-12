const mongoose = require('mongoose');
const instituteBillingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: null,
  },
  gstNumber: {
    type: String,
    default: null,
  },
  termsAndConditions: {
    type: String,
    default: null,
  },
  classMasterId: {
    type: String,
    unique: true,
    required: true,
  },
});

instituteBillingSchema.methods.toJSON = function () {
  const instituteBilling = this;
  const instituteBillingObject = instituteBilling.toObject();

  delete instituteBillingObject.__v;

  return instituteBillingObject;
};

const InstituteBilling = mongoose.model('InstituteBilling', instituteBillingSchema);

module.exports = InstituteBilling;
