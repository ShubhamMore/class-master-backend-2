const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const changeStudentStatus = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    if (!student) {
      throw new Error('No student Found, Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeStudentStatus;
