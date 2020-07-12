const Salary = require('../../models/salary.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const numToWords = require('../../functions/numToWords');

const newSalary = async (req, res) => {
  try {
    let salary = new Salary(req.body);
    salary.netAmountInWords = await numToWords(salary.netAmount);
    await salary.save();
    const budget = new Budget({
      salary: salary._id,
      generatedBy: salary.generatedBy,
      branch: salary.branch,
      title: 'Staff Salary',
      amount: salary.netAmount,
      type: '0',
      date: salary.date,
    });
    await budget.save();
    res.status(201).send({ _id: salary._id });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newSalary;
