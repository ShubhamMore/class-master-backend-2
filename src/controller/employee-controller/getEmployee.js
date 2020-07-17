const Employee = require('../../models/employee.model');
const errorHandler = require('../../handler/error.handler');

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.body.id);

    if (!employee) {
      throw new Error('Employee not Found');
    }

    res.status(200).send(employee);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployee;