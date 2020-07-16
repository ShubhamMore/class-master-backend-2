const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const newBranchEmployee = async (req, res) => {
  try {
    const branchEmployee = new BranchEmployee(req.body);

    await branchEmployee.save();

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newBranchEmployee;
