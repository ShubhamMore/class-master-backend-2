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
  date: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  basicAmount: {
    type: String,
    required: true,
  },
  earnings: [
    {
      description: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
    },
  ],
  deductions: [
    {
      description: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
    },
  ],

  generatedBy: {
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
  netSalary: {
    type: String,
    required: true,
  },
  netSalaryInWords: {
    type: String,
    required: true,
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
