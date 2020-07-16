const Employee = require('../../models/employee.model');
const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeeForSalary = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    });
    if (!employee) {
      throw new Error('No employee Found, Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeeForSalary;
