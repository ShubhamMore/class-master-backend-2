const mongoose = require('mongoose');
const branchStudentSchema = new mongoose.Schema({
  student: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

branchStudentSchema.methods.toJSON = function () {
  const branchStudent = this;
  const branchStudentObject = branchStudent.toObject();

  delete branchStudentObject.__v;

  return branchStudentObject;
};

const BranchStudent = mongoose.model('BranchStudent', branchStudentSchema);

module.exports = BranchStudent;
