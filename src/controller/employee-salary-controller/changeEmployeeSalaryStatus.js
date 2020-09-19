const EmployeeSalary = require('../../models/employee-salary.model');
const errorHandler = require('../../handler/error.handler');

const changeEmployeeSalaryStatus = async (req, res) => {
  try {
    const employeeSalary = await EmployeeSalary.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!employeeSalary) {
      throw new Error('Employee Salary Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeEmployeeSalaryStatus;
