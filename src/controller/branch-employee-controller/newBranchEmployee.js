const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const newBranchEmployee = async (req, res) => {
  try {
    const employee = new BranchEmployee(req.body);

    await employee.save();

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newBranchEmployee;
