const Employee = require('../../models/employee.model');
const errorHandler = require('../../handler/error.handler');

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.body._id, req.body);
    if (!employee) {
      throw new Error('No employee Found, Updation Failed');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateEmployee;
