const mongoose = require('mongoose');
const branchEmployeeSubjectSchema = new mongoose.Schema({
  employee: {
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
  course: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

branchEmployeeSubjectSchema.methods.toJSON = function () {
  const branchEmployeeSubject = this;
  const branchEmployeeSubjectObject = branchEmployeeSubject.toObject();

  delete branchEmployeeSubjectObject.__v;

  return branchEmployeeSubjectObject;
};

const BranchEmployeeSubject = mongoose.model('BranchEmployeeSubject', branchEmployeeSubjectSchema);

module.exports = BranchEmployeeSubject;
