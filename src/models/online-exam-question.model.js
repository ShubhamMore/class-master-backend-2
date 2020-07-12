const mongoose = require('mongoose');
const onlineExamQuestionSchema = new mongoose.Schema({
  onlineExam: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      answer: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
  marks: {
    type: Number,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

onlineExamQuestionSchema.methods.toJSON = function () {
  const onlineExamQuestion = this;
  const onlineExamQuestionObject = onlineExamQuestion.toObject();

  delete onlineExamQuestionObject.__v;

  return onlineExamQuestionObject;
};

const OnlineExamQuestion = mongoose.model('OnlineExamQuestion', onlineExamQuestionSchema);

module.exports = OnlineExamQuestion;
