const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const updateEmployeeLeave = async (req, res) => {
  try {
    const employeeLeave = await EmployeeLeave.findByIdAndUpdate(req.body._id, req.body);

    if (!employeeLeave) {
      throw new Error('Employee Leave Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateEmployeeLeave;
