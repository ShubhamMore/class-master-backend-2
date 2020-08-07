const mongoose = require('mongoose');
const lectureContentSchema = new mongoose.Schema({
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
  teacher: {
    type: String,
    required: true,
  },
  lecture: {
    type: String,
    required: true,
  },
  fileName: {
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

lectureContentSchema.methods.toJSON = function () {
  const lectureContent = this;
  const lectureContentObject = lectureContent.toObject();

  delete lectureContentObject.__v;

  return lectureContentObject;
};

const lectureContent = mongoose.model('LectureContent', lectureContentSchema);

module.exports = lectureContent;
