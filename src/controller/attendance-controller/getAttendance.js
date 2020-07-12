const Attendance = require('../../models/attendance.model');
const errorHandler = require('../../handler/error.handler');
const sortArrayOfObjects = require('../../functions/sortArrayOfObjects');

const findAttendanceStatus = (student, attendance) => {
  let status;

  attendance.forEach((atten) => {
    if (atten.student == student) {
      status = atten.attendanceStatus;
      return;
    }
  });

  return status;
};

const getAttendance = async (req, res) => {
  try {
    const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');

    const searchData = {
      date: date,
      course: req.body.course,
      batch: req.body.batch,
      attendance: {
        $all: [
          {
            $elemMatch: { student: req.body.student },
          },
        ],
      },
    };

    const attendance = await Attendance.find(searchData);

    const attendanceSend = new Array();

    attendance.forEach((atten) => {
      const attenObj = {
        date: atten.date,
        attendanceStatus: findAttendanceStatus(req.body.student, atten.attendance),
      };
      attendanceSend.push(attenObj);
    });

    const atten = sortArrayOfObjects(attendanceSend, 'date');
    res.status(200).send(atten);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAttendance;
