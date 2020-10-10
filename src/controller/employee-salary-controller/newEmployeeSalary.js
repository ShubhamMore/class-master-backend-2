const EmployeeSalary = require('../../models/employee-salary.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const newEmployeeSalary = async (req, res) => {
  try {
    const employeeSalary = new EmployeeSalary(req.body);
    const saveEmployeeSalary = employeeSalary.save();

    const budget = new Budget({
      salary: employeeSalary._id,
      generatedBy: employeeSalary.generatedBy,
      branch: employeeSalary.branch,
      title: 'Employee Salary',
      amount: employeeSalary.netSalary,
      type: 'expense',
      date: employeeSalary.date,
    });

    const saveBudget = budget.save();

    Promise.all([saveEmployeeSalary, saveBudget])
      .then((resData) => {
        res.status(201).send({ success: true });
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newEmployeeSalary;
