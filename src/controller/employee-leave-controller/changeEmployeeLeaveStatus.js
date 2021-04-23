const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const getDate = () => {
  const d = new Date();
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const changeEmployeeLeaveStatus = async (req, res) => {
  try {
    if (req.user.userRole === 'employee') {
      const employeeUser = await BranchEmployee.findOne({
        branch: req.body.branch,
        employee: req.user.imsMasterId,
      });

      if (!employeeUser || employeeUser.role !== 'manager') {
        throw new Error('You are not authorized user to Access this Data');
      }
    }

    const leaveStatusBody = {
      status: req.body.status,
      monitoredBy: req.user.imsMasterId,
      monitoredDate: getDate(),
    };

    const employeeLeave = await EmployeeLeave.findByIdAndUpdate(req.body._id, leaveStatusBody);

    if (!employeeLeave) {
      throw new Error('Employee Leave Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeEmployeeLeaveStatus;
