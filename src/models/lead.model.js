const mongoose = require('mongoose');
const leadSchema = new mongoose.Schema({
  leadName: {
    type: String,
    required: true,
  },
  leadContact: {
    type: String,
    required: true,
  },
  leadEmail: {
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
  address: {
    type: String,
    default: null,
  },
  date: {
    type: String,
    required: true,
  },
  followUpDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  strength: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

leadSchema.methods.toJSON = function () {
  const lead = this;
  const leadObject = lead.toObject();

  delete leadObject.__v;

  return leadObject;
};

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
