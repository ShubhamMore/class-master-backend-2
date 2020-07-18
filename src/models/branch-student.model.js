const mongoose = require('mongoose');
const studentCourseSchema = new mongoose.Schema({
  student: {
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
  admissionDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

studentCourseSchema.methods.toJSON = function () {
  const studentCourse = this;
  const studentCourseObject = studentCourse.toObject();

  delete studentCourseObject.__v;

  return studentCourseObject;
};

const StudentCourse = mongoose.model('StudentCourse', studentCourseSchema);

module.exports = StudentCourse;
