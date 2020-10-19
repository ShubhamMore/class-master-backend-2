const mongoose = require('mongoose');
const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
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
  subject: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  attendanceStatus: {
    type: Boolean,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
  },
});

lectureSchema.methods.toJSON = function () {
  const lecture = this;
  const lectureObject = lecture.toObject();

  delete lectureObject.__v;

  return lectureObject;
};

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
