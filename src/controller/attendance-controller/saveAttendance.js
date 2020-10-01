const Attendance = require('../../models/attendance.model');
const errorHandler = require('../../handler/error.handler');

const saveAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findOneAndUpdate(
      {
        branch: req.body.branch,
        category: req.body.category,
        course: req.body.course,
        batch: req.body.batch,
        lecture: req.body.lecture,
      },
      req.body,
      { upsert: true }
    );

    res.status(200).send(attendance);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveAttendance;
