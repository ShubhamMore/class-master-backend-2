const mongoose = require('mongoose');
const instituteBillingSchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gstNumber: {
    type: String,
    default: null,
  },
  termsAndConditions: {
    type: String,
    default: null,
  },
  studentReceipt: {
    type: Number,
    default: 0,
  },
  employeeSalary: {
    type: Number,
    default: 0,
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
