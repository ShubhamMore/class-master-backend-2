const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const changeBranchEmployeeStatus = async (req, res) => {
  try {
    const branchEmployee = await BranchEmployee.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    if (!branchEmployee) {
      throw new Error('No Branch Employee Found, Status Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeBranchEmployeeStatus;
