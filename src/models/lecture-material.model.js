const mongoose = require('mongoose');
const lectureMaterialSchema = new mongoose.Schema({
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
  lecture: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
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
    require: true,
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

lectureMaterialSchema.methods.toJSON = function () {
  const lectureMaterial = this;
  const lectureMaterialObject = lectureMaterial.toObject();

  delete lectureMaterialObject.__v;

  return lectureMaterialObject;
};

const lectureMaterial = mongoose.model('LectureMaterial', lectureMaterialSchema);

module.exports = lectureMaterial;
