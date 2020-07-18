const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const updateBranchStudent = async (req, res) => {
  try {
    const branchStudent = await BranchStudent.findByIdAndUpdate(req.body._id, req.body);
    if (!branchStudent) {
      throw new Error('No student Found, Branch Student Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateBranchStudent;
