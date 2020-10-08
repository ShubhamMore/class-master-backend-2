const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeeRole = async (req, res) => {
  try {
    const branchEmployee = await BranchEmployee.findOne(
      { branch: req.body.branch, employee: req.user.imsMasterId },
      { role: 1 }
    );

    if (!branchEmployee) {
      throw new Error('No Branch Employee Found');
    }

    res.status(200).send(branchEmployee);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeeRole;
