const Employee = require('../../models/employee.model');
const errorHandler = require('../../handler/error.handler');

const getEmployeeForEditing = async (req, res) => {
  try {
    const employee = await Employee.findById(req.body._id);
    if (!employee) {
      throw new Error('No employee Found');
    }

    res.status(200).send(employee);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployeeForEditing;
