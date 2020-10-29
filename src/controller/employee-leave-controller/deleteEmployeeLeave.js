const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const deleteEmployeeLeave = async (req, res) => {
  try {
    const employeeLeave = await EmployeeLeave.findByIdAndDelete(req.body.id);

    if (!employeeLeave) {
      throw new Error('Employee Leave Deletion Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteEmployeeLeave;
