const Employee = require('../../models/employee.model');
const errorHandler = require('../../handler/error.handler');

const searchEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({
      $or: [{ email: req.body.employeeId }, { imsMasterId: req.body.employeeId }],
    });

    if (!employee) {
      throw new Error('Employee not Found or Invalid Employee Id');
    }

    res.status(200).send(employee);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = searchEmployee;
