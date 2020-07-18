const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const changeBranchStudentStatus = async (req, res) => {
  try {
    const branchStudent = await BranchStudent.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    if (!branchStudent) {
      throw new Error('No Branch Student Found, Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeBranchStudentStatus;
