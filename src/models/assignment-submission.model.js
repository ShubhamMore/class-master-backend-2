const mongoose = require('mongoose');
const assignmentSubmissionSchema = new mongoose.Schema({
  assignment: {
    type: String,
    required: true,
  },
  student: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
  grades: {
    type: String,
    default: null,
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
  createdAt: {
    type: String,
    default: Date.now.toString(),
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const AssignmentSubmission = mongoose.model('AssignmentSubmission', assignmentSubmissionSchema);

module.exports = AssignmentSubmission;
