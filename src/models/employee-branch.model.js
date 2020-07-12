const mongoose = require('mongoose');
const employeeBranchSchema = new mongoose.Schema({
  employee: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  employeeBranchRole: {
    type: String,
    required: true,
  },
  basicSalary: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

employeeBranchSchema.methods.toJSON = function () {
  const employeeBranch = this;
  const employeeBranchObject = employeeBranch.toObject();

  delete employeeBranchObject.__v;

  return employeeBranchObject;
};

const EmployeeBranch = mongoose.model('EmployeeBranch', employeeBranchSchema);

module.exports = EmployeeBranch;
