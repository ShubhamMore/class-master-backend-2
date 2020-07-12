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
  course: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  activationDate: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  discountType: {
    type: String,
    default: null,
  },
  discount: {
    type: Number,
    default: null,
  },
  netPayable: {
    type: Number,
    required: true,
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
