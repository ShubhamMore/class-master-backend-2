const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const sortArrayOfObjects = require('../../functions/sortArrayOfObjects');

const getBudgetSummery = async (req, res) => {
  try {
    let budgetSummery;
    let searchData = {};

    if (req.body.month && req.body.year) {
      const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
      searchData.date = date;
    } else if (req.body.year) {
      const date = new RegExp('.*' + req.body.year + '.*');
      searchData.date = date;
    }

    if (req.body.searchType !== '0') {
      searchData.branch = req.body.searchType;
    }

    budgetSummery = await Budget.find(searchData);

    const statement = sortArrayOfObjects(budgetSummery, 'date');

    res.status(201).send(statement);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBudgetSummery;
