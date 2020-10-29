const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeeLeaves = async (req, res) => {
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

    const employeeLeaves = await EmployeeLeave.find(searchQuery);

    res.status(200).send(employeeLeaves);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeeLeaves;
