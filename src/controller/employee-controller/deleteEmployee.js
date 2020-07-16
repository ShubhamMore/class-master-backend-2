const Employee = require('../../models/employee.model');
const errorHandler = require('../../handler/error.handler');

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.body._id);
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteEmployee;
