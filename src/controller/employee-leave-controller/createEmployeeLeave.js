const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const createEmployeeLeave = async (req, res) => {
  try {
    const employeeLeave = new EmployeeLeave(req.body);
    await employeeLeave.save();

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = createEmployeeLeave;
