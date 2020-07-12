const Student = require('../../models/student.model');
const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getBranchStudentForEditing = async (req, res) => {
  try {
    const branches = await Branch.find({ _id: req.body.branch });
    if (branches.length < 1) {
      throw new Error('No Course Found');
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

module.exports = getBranchStudentForEditing;
