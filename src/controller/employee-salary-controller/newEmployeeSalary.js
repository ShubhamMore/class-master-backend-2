const EmployeeSalary = require('../../models/employee-salary.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const newEmployeeSalary = async (req, res) => {
  try {
    const employeeSalary = new EmployeeSalary(req.body);
    await employeeSalary.save();

    // const budget = new Budget({
    //   employeeSalary: employeeSalary._id,
    //   generatedBy: employeeSalary.generatedBy,
    //   branch: employeeSalary.branch,
    //   title: 'Employee Salary',
    //   amount: employeeSalary.netAmount,
    //   type: '0',
    //   date: employeeSalary.date,
    // });
    // await budget.save();

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newEmployeeSalary;
