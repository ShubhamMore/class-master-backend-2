const mongoose = require('mongoose');
const salarySchema = new mongoose.Schema({
  employee: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  generatedBy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  earnings: [
    {
      earning: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
  deductions: [
    {
      deduction: {
        type: String,
        require: true,
      },
      amount: {
        type: Number,
        require: true,
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  basicAmount: {
    type: Number,
    require: true,
  },
  netAmount: {
    type: Number,
    require: true,
  },
  netAmountInWords: {
    type: String,
    require: true,
  },
  paymentMode: {
    type: String,
    require: true,
  },
  bankDetails: {
    type: String,
    default: null,
  },
  transactionDetails: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

salarySchema.methods.toJSON = function () {
  const salary = this;
  const salaryObject = salary.toObject();

  delete salaryObject.__v;

  return salaryObject;
};

const salary = mongoose.model('Salary', salarySchema);

module.exports = salary;
