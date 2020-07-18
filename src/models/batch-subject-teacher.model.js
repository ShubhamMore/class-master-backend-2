const mongoose = require('mongoose');
const batchSubjectTeacherSchema = new mongoose.Schema({
  employee: {
    type: String,
    default: null,
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
  batch: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

batchSubjectTeacherSchema.methods.toJSON = function () {
  const batchSubjectTeacher = this;
  const batchSubjectTeacherObject = batchSubjectTeacher.toObject();

  delete batchSubjectTeacherObject.__v;

  return batchSubjectTeacherObject;
};

const BatchSubjectTeacher = mongoose.model('BatchSubjectTeacher', batchSubjectTeacherSchema);

module.exports = BatchSubjectTeacher;
