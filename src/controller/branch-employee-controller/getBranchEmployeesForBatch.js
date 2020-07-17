const EmployeeBranch = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeesForBatch = async (req, res) => {
  try {
    const employeeBranch = await EmployeeBranch.find({
      branch: req.body.branch,
      role: req.body.role,
    });
    res.status(200).send(employeeBranch);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeesForBatch;
