const EmployeeSalary = require('../../models/employee-salary.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const deleteEmployeeSalary = async (req, res) => {
  try {
    const employeeSalary = await EmployeeSalary.findByIdAndDelete(req.body._id);

    if (!employeeSalary) {
      throw new Error('Employee Salary Status Deletion Failed');
    }

    await Budget.findOneAndDelete({ employeeSalary: employeeSalary._id });

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteEmployeeSalary;
