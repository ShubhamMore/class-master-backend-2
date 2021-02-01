const mongoose = require('mongoose');
const courseMaterialSchema = new mongoose.Schema({
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
  subject: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  storageType: {
    type: String,
    default: null,
  },
  fileName: {
    type: String,
    required: true,
  },
  fileSize: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now.toString(),
  },
  status: {
    type: Boolean,
    required: true,
  },
});

courseMaterialSchema.methods.toJSON = function () {
  const courseMaterial = this;
  const courseMaterialObject = courseMaterial.toObject();

  delete courseMaterialObject.__v;

  return courseMaterialObject;
};

const CourseMaterial = mongoose.model('CourseMaterial', courseMaterialSchema);

module.exports = CourseMaterial;
