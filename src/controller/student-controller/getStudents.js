const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const getStudents = async (req, res) => {
  try {
    const student = await Student.find({});
    res.status(200).send(student);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudents;
