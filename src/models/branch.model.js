const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  branchName: {
    type: String,
    require: true,
  },
  branchCode: {
    type: String,
    require: true,
  },
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
    require: true,
  },
  pinCode: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  phone: {
    type: String,
    unique: true,
    require: true,
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
  company: {
    type: String,
    require: true,
  },
  studentReceipt: {
    type: Number,
    default: 0,
  },
  employeeSalary: {
    type: Number,
    default: 0,
  },
  parentUser: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
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
