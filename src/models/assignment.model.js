const mongoose = require('mongoose');
const assignmentSchema = new mongoose.Schema({
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
  topic: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  submissionDate: {
    type: String,
    required: true,
  },
  totalGrades: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    default: null,
  },
  fileSize: {
    type: String,
    default: null,
  },
  fileType: {
    type: String,
    default: null,
  },
  secureUrl: {
    type: String,
    default: null,
  },
  publicId: {
    type: String,
    default: null,
  },
  generatedBy: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
