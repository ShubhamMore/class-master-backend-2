const mongoose = require('mongoose');
const examSchema = new mongoose.Schema({
  examTitle: {
    type: String,
    required: true,
  },
  onlineExam: {
    type: String,
    default: null,
  },
  outOfMarks: {
    type: Number,
    required: true,
  },
  passingMarks: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  duration: {
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
  marks: [
    {
      student: {
        type: String,
        required: true,
      },
      rollNumber: {
        type: String,
        required: true,
      },
      marks: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
