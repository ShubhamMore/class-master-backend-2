const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const getBudgetForBranch = async (req, res) => {
  try {
    const query = {
      branch: req.body.branch,
    };

    if (req.body.month !== '' && req.body.year !== '') {
      const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
      query.date = date;
    } else if (req.body.year !== '') {
      const date = new RegExp('.*' + req.body.year + '.*');
      query.date = date;
    }

    const income = Budget.find({ ...query, type: 'income' });
    const expense = Budget.find({ ...query, type: 'expense' });

    Promise.all([income, expense])
      .then((incomeExpense) => {
        res.status(200).send({ incomes: incomeExpense[0], expenses: incomeExpense[1] });
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBudgetForBranch;
