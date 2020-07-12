const mongoose = require('mongoose');
const onlineExamSchema = new mongoose.Schema({
  title: {
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
  description: {
    type: String,
    default: '',
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  passingMarks: {
    type: Number,
    required: true,
  },
  eachQuestionMarks: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

onlineExamSchema.methods.toJSON = function () {
  const onlineExam = this;
  const onlineExamObject = onlineExam.toObject();

  delete onlineExamObject.__v;

  return onlineExamObject;
};

const OnlineExam = mongoose.model('OnlineExam', onlineExamSchema);

module.exports = OnlineExam;
