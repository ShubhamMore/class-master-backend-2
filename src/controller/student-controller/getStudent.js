const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const getStudentForEditing = async (req, res) => {
  try {
    const student = await Student.findById(req.body._id);
    if (!student) {
      throw new Error('No student Found');
    }

    res.status(200).send(student);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentForEditing;
