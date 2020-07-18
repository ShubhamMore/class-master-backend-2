const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.body._id);
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteStudent;
