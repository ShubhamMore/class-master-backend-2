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
    type: String,
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
        require: true,
      },
      marks: {
        type: Number,
        require: true,
      },
    },
  ],
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
