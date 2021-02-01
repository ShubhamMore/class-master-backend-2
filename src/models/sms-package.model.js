const mongoose = require('mongoose');
const smsPackageSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  smsCount: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

smsPackageSchema.methods.toJSON = function () {
  const smsPackage = this;
  const smsPackageObject = smsPackage.toObject();

  delete smsPackageObject.__v;

  return smsPackageObject;
};

const SMSPackage = mongoose.model('SMSPackage', smsPackageSchema);

module.exports = SMSPackage;
