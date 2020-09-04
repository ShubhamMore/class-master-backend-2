const mongoose = require('mongoose');
const scheduleSchema = new mongoose.Schema({
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
    default: null,
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },

  topic: {
    type: String,
    default: null,
  },
  teacher: {
    type: String,
    default: null,
  },
  sessionType: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

scheduleSchema.methods.toJSON = function () {
  const schedule = this;
  const scheduleObject = schedule.toObject();

  delete scheduleObject.__v;

  return scheduleObject;
};

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
