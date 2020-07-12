const Attendance = require('../../models/attendance.model');
const Student = require('../../models/student.model');
const findStudentNames = require('../../functions/findStudentNames');
const errorHandler = require('../../handler/error.handler');

const getStudentsForAttendance = async (req, res) => {
  try {
    let attendance = await Attendance.findOne({
      date: req.body.date,
      course: req.body.course,
      batch: req.body.batch,
    });

    if (attendance) {
      let prepareAttendance = new Array();
      const students = await findStudentNames(attendance.attendance);
      const len = students.length;
      for (let i = 0; i < len; i++) {
        const atten = {
          _id: attendance.attendance[i]._id,
          student: students[i].name,
          attendanceStatus: attendance.attendance[i].attendanceStatus,
        };
        prepareAttendance.push(atten);
      }

      res.status(200).send({ atten: true, attendance: prepareAttendance });
      return;
    }

    // SELECT ALL FROM STUDENTS WHERE COURSE = req.body.course AND BATCH = req.body.batch AND (STATUS = "0" OR STATUS = "1")
    const students = await Student.find(
      {
        course: req.body.course,
        batch: req.body.batch,
        $or: [{ status: '0' }, { status: '1' }],
      },
      { _id: 1, name: 1 }
    );

    res.status(200).send(students);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentsForAttendance;
