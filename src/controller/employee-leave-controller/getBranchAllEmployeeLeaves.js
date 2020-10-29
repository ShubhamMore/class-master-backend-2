const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const getBranchAllEmployeeLeaves = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
    };

    if (req.body.employee !== '') {
      searchQuery.employee = req.body.employee;
    }

    if (req.body.year !== '' && req.body.month === '') {
      searchQuery.date = new RegExp('.*' + req.body.year + '.*');
    } else if (req.body.month !== '' && req.body.year !== '') {
      searchQuery.date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
    }

    const employeeLeaves = await EmployeeLeave.find(searchQuery);

    res.status(200).send(employeeLeaves);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchAllEmployeeLeaves;
