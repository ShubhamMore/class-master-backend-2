const mongoose = require('mongoose');
const employeeLeaveSchema = new mongoose.Schema({
  employee: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    default: null,
  },
  hours: {
    type: String,
    default: null,
  },
  reason: {
    type: String,
    required: true,
  },
  monitoredBy: {
    type: String,
    required: true,
  },
  monitoredDate: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    default: 'pending',
  },
});

employeeLeaveSchema.methods.toJSON = function () {
  const employeeLeave = this;
  const employeeLeaveObject = employeeLeave.toObject();

  delete employeeLeaveObject.__v;

  return employeeLeaveObject;
};

const EmployeeLeave = mongoose.model('EmployeeLeave', employeeLeaveSchema);

module.exports = EmployeeLeave;
