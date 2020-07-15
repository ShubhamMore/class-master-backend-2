const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
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
  parentName: {
    type: String,
    default: null,
  },
  parentEmail: {
    type: String,
    default: null,
  },
  parentPhone: {
    type: String,
    default: null,
  },
  imsMasterId: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

studentSchema.methods.toJSON = function () {
  const student = this;
  const studentObject = student.toObject();

  delete studentObject.__v;

  return studentObject;
};

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
