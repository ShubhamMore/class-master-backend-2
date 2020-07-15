const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    default: null,
  },
  qualification: {
    type: String,
    default: null,
  },
  imsMasterId: {
    type: String,
    unique: true,
    required: true,
  },
});

employeeSchema.methods.toJSON = function () {
  const employee = this;
  const employeeObject = employee.toObject();

  delete employeeObject.__v;

  return employeeObject;
};

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
