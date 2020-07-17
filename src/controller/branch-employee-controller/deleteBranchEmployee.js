const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const deleteBranchEmployee = async (req, res) => {
  try {
    const employee = await BranchEmployee.findByIdAndDelete(req.body.id);
    if (!employee) {
      throw new Error('No Branch employee Found, Employee Deletion Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteBranchEmployee;
