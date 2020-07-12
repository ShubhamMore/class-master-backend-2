const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const getStudentsForExam = async (req, res) => {
  try {
    // SELECT ALL FROM STUDENTS WHERE COURSE = req.body.course AND BATCH = req.body.batch AND (STATUS = "0" OR STATUS = "1") AND STUDENT.SUBJECTS.includes(req.body.subject)
    const students = await Student.find({
      course: req.body.course,
      batch: req.body.batch,
      $or: [{ status: '0' }, { status: '1' }],
    });

    if (!students) {
      throw new Error('No Student Found');
    }

    res.status(200).send(students);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentsForExam;
