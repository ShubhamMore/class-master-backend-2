const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const changeEmployeeLeaveStatus = async (req, res) => {
  try {
    const employeeLeave = await EmployeeLeave.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!employeeLeave) {
      throw new Error('Employee Leave Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeEmployeeLeaveStatus;
