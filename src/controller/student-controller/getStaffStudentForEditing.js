const Student = require('../../models/student.model');
const Staff = require('../../models/staff.model');
const errorHandler = require('../../handler/error.handler');

const getStaffStudentForEditing = async (req, res) => {
  try {
    const staff = await Staff.findById(req.body.staff);
    if (!staff) {
      throw new Error('No Staff Found');
    }

    const student = await Student.findById(req.body._id);
    if (!student) {
      throw new Error('No Student Found');
    }

    res.status(200).send(student);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStaffStudentForEditing;
