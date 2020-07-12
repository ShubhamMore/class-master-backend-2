const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const getBudget = async (req, res) => {
  try {
    let searchDataForIncome = {
      type: '1',
    };
    let searchDataForExpense = {
      type: '0',
    };

    if (req.body.month && req.body.year) {
      const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
      searchDataForIncome.date = date;
      searchDataForExpense.date = date;
    } else if (req.body.year) {
      const date = new RegExp('.*' + req.body.year + '.*');
      searchDataForIncome.date = date;
      searchDataForExpense.date = date;
    }

    if (req.body.searchType !== '0') {
      searchDataForIncome.branch = req.body.searchType;
      searchDataForExpense.branch = req.body.searchType;
    }
    const income = await Budget.find(searchDataForIncome);
    const expense = await Budget.find(searchDataForExpense);

    res.status(201).send({ income, expense });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBudget;
