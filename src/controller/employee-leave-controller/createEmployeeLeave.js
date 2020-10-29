const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const createEmployeeLeave = async (req, res) => {
  try {
    req.body.employee = req.user.imsMasterId;

    console.log(req.body);

    const employeeLeave = new EmployeeLeave(req.body);
    await employeeLeave.save();

    res.status(201).send(employeeLeave);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = createEmployeeLeave;
