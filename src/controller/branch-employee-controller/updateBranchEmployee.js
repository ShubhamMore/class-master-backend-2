const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const updateBranchEmployee = async (req, res) => {
  try {
    const employee = await BranchEmployee.findByIdAndUpdate(req.body._id, req.body);
    if (!employee) {
      throw new Error('No employee Found, Branch Employee Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateBranchEmployee;
