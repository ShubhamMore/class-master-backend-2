const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const deleteBranchStudent = async (req, res) => {
  try {
    const student = await BranchStudent.findByIdAndDelete(req.body.id);
    if (!student) {
      throw new Error('No Branch student Found, Student Deletion Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteBranchStudent;
