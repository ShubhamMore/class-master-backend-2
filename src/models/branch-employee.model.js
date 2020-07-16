const mongoose = require('mongoose');
const branchEmployeeSchema = new mongoose.Schema({
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
    default: null,
  },
  role: {
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

branchEmployeeSchema.methods.toJSON = function () {
  const branchEmployee = this;
  const branchEmployeeObject = branchEmployee.toObject();

  delete branchEmployeeObject.__v;

  return branchEmployeeObject;
};

const BranchEmployee = mongoose.model('BranchEmployee', branchEmployeeSchema);

module.exports = BranchEmployee;
