const Attendance = require('../../models/attendance.model');
const errorHandler = require('../../handler/error.handler');

const saveAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);

    await attendance.save();

    res.status(200).send(attendance);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveAttendance;
