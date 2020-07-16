const Employee = require('../../models/employee.model');
const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeeForEditing = async (req, res) => {
  try {
    const employee = await Employee.findOne({ imsMasterId: req.body.employee });
    if (!employee) {
      throw new Error('No employee Found');
    }
    const branchEmployee = await BranchEmployee.findById(req.body.id);
    if (!branchEmployee) {
      throw new Error('No Branch Employee Found');
    }

    res.status(200).send({ employee, branchEmployee });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeeForEditing;
