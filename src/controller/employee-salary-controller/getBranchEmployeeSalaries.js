const EmployeeSalary = require('../../models/employee-salary.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeeSalaries = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
      employee: req.body.employee,
    };

    let date = null;

    if (req.body.year !== '' && req.body.month === '') {
      date = new RegExp('.*' + req.body.year + '.*');
    }

    if (req.body.month !== '' && req.body.year !== '') {
      date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
    }

    if (date) {
      searchQuery.date = date;
    }

    const employeeSalaries = await EmployeeSalary.find(searchQuery);

    res.status(200).send(employeeSalaries);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeeSalaries;
