const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const getEmployeeLeaves = async (req, res) => {
  try {
    const employeeLeaves = await EmployeeLeave.find({ employee: req.body.employee });

    res.status(200).send(employeeLeaves);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployeeLeaves;
