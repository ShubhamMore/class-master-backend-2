const Student = require('../../models/student.model');
const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const searchStudent = async (req, res) => {
  try {
    const student = await Student.findOne({
      $or: [{ email: req.body.studentId }, { imsMasterId: req.body.studentId }],
    });

    if (!student) {
      throw new Error('Student not Found or Invalid Student Id');
    }

    const branchStudent = await BranchStudent.findOne({
      branch: req.body.branchId,
      student: student.imsMasterId,
    });

    if (branchStudent) {
      throw new Error('Student alredy registered to this Branch');
    }

    res.status(200).send(student);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = searchStudent;
