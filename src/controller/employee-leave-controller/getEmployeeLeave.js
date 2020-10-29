const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const getEmployeeLeave = async (req, res) => {
  try {
    const employeeLeave = await EmployeeLeave.findById(req.body._id);

    if (!employeeLeave) {
      throw new Error('Employee Leave Not Found');
    }

    res.status(200).send(employeeLeave);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployeeLeave;
