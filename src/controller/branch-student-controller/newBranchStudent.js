const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const newBranchStudent = async (req, res) => {
  try {
    const branchStudent = new BranchStudent(req.body);

    await branchStudent.save();

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newBranchStudent;
