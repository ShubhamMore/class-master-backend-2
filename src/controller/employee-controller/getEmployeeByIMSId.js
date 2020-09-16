const Employee = require('../../models/employee.model');
const errorHandler = require('../../handler/error.handler');

const getEmployeeByIMSId = async (req, res) => {
  try {
    console.log(req.body);

    const employee = await Employee.findOne({
      imsMasterId: req.body.id,
    });

    if (!employee) {
      throw new Error('Employee not Found');
    }

    res.status(200).send(employee);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getEmployeeByIMSId;
