const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.body.id, req.body);
    if (!student) {
      throw new Error('No student Found, Updation Failed');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateStudent;