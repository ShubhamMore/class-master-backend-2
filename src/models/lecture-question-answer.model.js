const mongoose = require('mongoose');
const lectureQuestionAnswerSchema = new mongoose.Schema({
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
  lecture: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
  editedAt: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

lectureQuestionAnswerSchema.methods.toJSON = function () {
  const lectureQuestionAnswer = this;
  const lectureQuestionAnswerObject = lectureQuestionAnswer.toObject();

  delete lectureQuestionAnswerObject.__v;

  return lectureQuestionAnswerObject;
};

const LectureQuestionAnswer = mongoose.model('LectureQuestionAnswer', lectureQuestionAnswerSchema);

module.exports = LectureQuestionAnswer;
