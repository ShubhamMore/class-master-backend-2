const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const searchStudent = async (req, res) => {
  try {
    console.log(req.body);
    const student = await Student.findOne({
      $or: [{ email: req.body.studentId }, { imsMasterId: req.body.studentId }],
    });

    if (!student) {
      throw new Error('Student not Found or Invalid Student Id');
    }

    res.status(200).send(student);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = searchStudent;
