const EmployeeSalary = require('../../models/employee-salary.model');
const errorHandler = require('../../handler/error.handler');

const getEmployeeSalary = async (req, res) => {
  try {
    const employeeSalary = await EmployeeSalary.findById(req.body._id);

    if (!employeeSalary) {
      throw new Error('Employee Salary Not Found');
    }

    res.status(200).send(employeeSalary);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployeeSalary;
