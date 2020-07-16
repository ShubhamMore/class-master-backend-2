const EmployeeSalary = require('../../models/employee-salary.model');
const errorHandler = require('../../handler/error.handler');

const getEmployeeSalaries = async (req, res) => {
  try {
    const employeeSalary = await EmployeeSalary.find({ employee: req.body.employee });

    res.status(200).send(employeeSalary);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployeeSalaries;
