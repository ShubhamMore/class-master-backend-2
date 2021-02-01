const mongoose = require('mongoose');

const branchStorageSchema = new mongoose.Schema({
  branch: {
    type: String,
    require: true,
    unique: true,
  },
  regularStorageAssigned: {
    type: Number,
    default: 2147483648,
  },
  extraStorage: {
    type: String,
    default: null,
  },
  extraStorageAssigned: {
    type: Number,
    default: 0,
  },
  extraStorageExpireOn: {
    type: String,
    default: null,
  },
  totalStorageAssigned: {
    type: Number,
    default: 2147483648,
  },
  totalStorageUsed: {
    type: Number,
    default: 0,
  },
});

branchStorageSchema.methods.toJSON = function () {
  const branchStorage = this;
  const branchStorageObject = branchStorage.toObject();

  delete branchStorageObject.__v;

  return branchStorageObject;
};

const BranchStorage = mongoose.model('BranchStorage', branchStorageSchema);

module.exports = BranchStorage;
