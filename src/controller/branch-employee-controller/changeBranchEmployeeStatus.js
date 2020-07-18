const BranchEmployee = require('../../models/branch-employee.model');
const BatchSubjectTeacher = require('../../models/batch-subject-teacher.model');

const errorHandler = require('../../handler/error.handler');

const changeBranchEmployeeStatus = async (req, res) => {
  try {
    const branchEmployee = await BranchEmployee.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });

    if (!branchEmployee) {
      throw new Error('No Branch Employee Found, Status Updation Failed');
    }

    if (!req.body.status) {
      await BatchSubjectTeacher.updateMany(
        { employee: branchEmployee.employee },
        { employee: null }
      );
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeBranchEmployeeStatus;
