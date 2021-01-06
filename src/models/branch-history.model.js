const mongoose = require('mongoose');
const validator = require('validator');

const branchHistorySchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  activationDate: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  planType: {
    type: String,
    required: true,
  },
});

branchHistorySchema.methods.toJSON = function () {
  const branchHistory = this;
  const branchHistoryObject = branchHistory.toObject();

  delete branchHistoryObject.__v;

  return branchHistoryObject;
};

const BranchHistory = mongoose.model('BranchHistory', branchHistorySchema);

module.exports = BranchHistory;
