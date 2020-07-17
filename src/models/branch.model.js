const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  basicDetails: {
    branchName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  address: {
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      default: null,
    },
    pinCode: {
      type: String,
      required: true,
    },
  },
  categories: [
    {
      category: {
        type: String,
        required: true,
      },
      status: {
        type: Boolean,
        default: true,
      },
    },
  ],
  currentPlanDetails: {
    planType: {
      type: String,
      default: null,
    },
    activationDate: {
      type: String,
      default: null,
    },
    expiryDate: {
      type: String,
      default: null,
    },
  },
  parentUser: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

branchSchema.methods.toJSON = function () {
  const branch = this;
  const branchObject = branch.toObject();

  delete branchObject.__v;

  return branchObject;
};

const branch = mongoose.model('Branch', branchSchema);

module.exports = branch;
