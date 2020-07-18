const Student = require('../../models/student.model');
const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const getBranchStudentForEditing = async (req, res) => {
  try {
    const student = await Student.findOne({ imsMasterId: req.body.student });
    if (!student) {
      throw new Error('No student Found');
    }
    const branchStudent = await BranchStudent.findById(req.body.id);
    if (!branchStudent) {
      throw new Error('No Branch Student Found');
    }

    res.status(200).send({ student, branchStudent });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchStudentForEditing;
