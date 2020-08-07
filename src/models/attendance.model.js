const mongoose = require('mongoose');
const attendanceSchema = new mongoose.Schema({
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
  attendance: [
    {
      student: {
        type: String,
        required: true,
      },
      attendance: {
        type: String,
        required: true,
      },
    },
  ],
  status: {
    type: Boolean,
    default: false,
  },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
