const mongoose = require('mongoose');
const employeeBranchSubjectSchema = new mongoose.Schema({
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

employeeBranchSubjectSchema.methods.toJSON = function () {
  const employeeBranchSubject = this;
  const employeeBranchSubjectObject = employeeBranchSubject.toObject();

  delete employeeBranchSubjectObject.__v;

  return employeeBranchSubjectObject;
};

const EmployeeBranchSubject = mongoose.model('EmployeeBranchSubject', employeeBranchSubjectSchema);

module.exports = EmployeeBranchSubject;
