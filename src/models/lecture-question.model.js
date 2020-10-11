const mongoose = require('mongoose');
const lectureQuestionSchema = new mongoose.Schema({
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

lectureQuestionSchema.methods.toJSON = function () {
  const lectureQuestion = this;
  const lectureQuestionObject = lectureQuestion.toObject();

  delete lectureQuestionObject.__v;

  return lectureQuestionObject;
};

const LectureQuestion = mongoose.model('LectureQuestion', lectureQuestionSchema);

module.exports = LectureQuestion;
