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
  scheduleStartDate: {
    type: String,
    required: true,
  },
  scheduleEndDate: {
    type: String,
    required: true,
  },
  schedule: [
    {
      day: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      startTime: {
        type: String,
        default: null,
      },
      duration: {
        type: Number,
        default: null,
      },
      type: {
        type: String,
        default: null,
      },
      subject: {
        type: String,
        default: null,
      },
      topic: {
        type: String,
        default: null,
      },
      teacher: {
        type: String,
        default: null,
      },
      status: {
        type: Boolean,
        default: true,
      },
    },
  ],
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
