const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeesForBatch = async (req, res) => {
  try {
    const branchEmployees = await BranchEmployee.find({
      branch: req.body.branch,
      role: req.body.role,
    });

    // const teachers = await getTeachers(branchEmployees);
    res.status(200).send(branchEmployees);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeesForBatch;
