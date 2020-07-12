const mongoose = require('mongoose');
const onlineExamResultSchema = new mongoose.Schema({
  student: {
    type: String,
    required: true,
  },
  onlineExam: {
    type: String,
    required: true,
  },
  answeredQuestions: {
    type: Number,
    required: true,
  },
  unAnsweredQuestions: {
    type: Number,
    required: true,
  },
  correctAnswers: {
    type: Number,
    required: true,
  },
  wrongAnswers: {
    type: Number,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

onlineExamResultSchema.methods.toJSON = function () {
  const onlineExamResult = this;
  const onlineExamResultObject = onlineExamResult.toObject();

  delete onlineExamResultObject.__v;

  return onlineExamResultObject;
};

const OnlineExamResult = mongoose.model('OnlineExamResult', onlineExamResultSchema);

module.exports = OnlineExamResult;
