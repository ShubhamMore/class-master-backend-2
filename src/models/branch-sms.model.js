const mongoose = require('mongoose');

const branchSMSSchema = new mongoose.Schema({
  branch: {
    type: String,
    require: true,
    unique: true,
  },
  smsCount: {
    type: Number,
    default: 0,
  },
  smsUsed: {
    type: Number,
    default: 0,
  },
  totalSMSUsed: {
    type: Number,
    default: 0,
  },
});

branchSMSSchema.methods.toJSON = function () {
  const branchSMS = this;
  const branchSMSObject = branchSMS.toObject();

  delete branchSMSObject.__v;

  return branchSMSObject;
};

const BranchSMS = mongoose.model('BranchSMS', branchSMSSchema);

module.exports = BranchSMS;
