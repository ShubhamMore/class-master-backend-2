const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployees = async (req, res) => {
  try {
    const branchEmployee = await BranchEmployee.find({
      branch: req.body.branch,
      status: req.body.type === 'active',
    });

    res.status(200).send(branchEmployee);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployees;
