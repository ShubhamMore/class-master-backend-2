const Employee = require('../../models/employee.model');
const errorHandler = require('../../handler/error.handler');

const getEmployees = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(200).send(employee);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployees;
