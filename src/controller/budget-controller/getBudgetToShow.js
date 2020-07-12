const Budget = require('../../models/budget.model');
const Receipt = require('../../models/receipt.model');
const Salary = require('../../models/salary.model');
const Student = require('../../models/student.model');

const findBranchName = require('../../functions/findBranchName');
const findCourseName = require('../../functions/findCourseName');
const findBatchName = require('../../functions/findBatchName');
const findStaffName = require('../../functions/findStaffName');

const errorHandler = require('../../handler/error.handler');

const getBudgetToShow = async (req, res) => {
  try {
    const budget = await Budget.findById(req.body._id);

    if (budget.branch !== '') {
      budget.branch = await findBranchName(budget.branch);
    }

    dataToSend = { budget };

    if (budget.receipt !== '') {
      const receipt = await Receipt.findById(budget.receipt);
      const student = await Student.findById(receipt.student, { _id: 0, name: 1, amountDue: 1 });
      receipt.branch = await findBranchName(receipt.branch);
      receipt.student = student.name;
      receipt.amountDue = student.amountDue;
      receipt.batch = await findBatchName(receipt.batch);
      receipt.course = await findCourseName(receipt.course);
      dataToSend.receipt = receipt;
    }

    if (budget.salary !== '') {
      const salary = await Salary.findById(budget.salary);
      salary.branch = await findBranchName(salary.branch);
      salary.staff = await findStaffName(salary.staff);

      dataToSend.salary = salary;
    }

    res.status(201).send(dataToSend);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBudgetToShow;
