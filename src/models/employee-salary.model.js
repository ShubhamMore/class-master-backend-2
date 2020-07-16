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

employeeSalarySchema.methods.toJSON = function () {
  const employeeSalary = this;
  const employeeSalaryObject = employeeSalary.toObject();

  delete employeeSalaryObject.__v;

  return employeeSalaryObject;
};

const EmployeeSalary = mongoose.model('EmployeeSalary', employeeSalarySchema);

module.exports = EmployeeSalary;
