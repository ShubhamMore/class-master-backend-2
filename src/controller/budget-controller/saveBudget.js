const Budget = require('../../models/budget.model');
const Receipt = require('../../models/receipt.model');
const Salary = require('../../models/salary.model');
const Student = require('../../models/student.model');

const sortArrayOfObjects = require('../../functions/sortArrayOfObjects');
const findBranchName = require('../../functions/findBranchName');
const findCourseName = require('../../functions/findCourseName');
const findBatchName = require('../../functions/findBatchName');
const findStaffName = require('../../functions/findStaffName');

const errorHandler = require('../../handler/error.handler');

const saveBudget = async (req, res) => {
  try {
    const budget = new Budget(req.body);
    await budget.save();
    const data = {
      success: true,
    };
    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveBudget;
