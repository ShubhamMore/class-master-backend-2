const mongoose = require('mongoose');
const instituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  classMasterId: {
    type: String,
    unique: true,
    required: true,
  },
  code: {
    type: Number,
    default: 0,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

instituteSchema.methods.toJSON = function () {
  const institute = this;
  const instituteObject = institute.toObject();

  delete instituteObject.code;
  delete instituteObject.__v;

  return instituteObject;
};

const Institute = mongoose.model('Institute', instituteSchema);

module.exports = Institute;
