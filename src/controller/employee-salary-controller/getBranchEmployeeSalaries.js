const EmployeeSalary = require('../../models/employee-salary.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeeSalaries = async (req, res) => {
  try {
    const employeeSalary = await EmployeeSalary.find({
      branch: req.body.branch,
    });
    res.status(200).send(employeeSalary);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeeSalaries;
