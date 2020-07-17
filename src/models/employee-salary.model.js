const mongoose = require('mongoose');
const employeeSalarySchema = new mongoose.Schema({
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
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  basicAmount: {
    type: Number,
    required: true,
  },
  netAmount: {
    type: Number,
    required: true,
  },
  netAmountInWords: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
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

employeeSalarySchema.methods.toJSON = function () {
  const employeeSalary = this;
  const employeeSalaryObject = employeeSalary.toObject();

  delete employeeSalaryObject.__v;

  return employeeSalaryObject;
};

const EmployeeSalary = mongoose.model('EmployeeSalary', employeeSalarySchema);

module.exports = EmployeeSalary;
