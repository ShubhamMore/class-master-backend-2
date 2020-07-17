const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  basicDetails: {
    branchName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
  },
  address: {
    state: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    address1: {
      type: String,
      require: true,
    },
    address2: {
      type: String,
      default: null,
    },
    pinCode: {
      type: String,
      require: true,
    },
  },
  categories: [
    {
      category: {
        type: String,
        require: true,
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
