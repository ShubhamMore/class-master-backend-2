const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const getBudgetSummery = async (req, res) => {
  try {
    const query = {
      branch: req.body.branch,
    };

    if (req.body.month && req.body.year) {
      const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
      query.date = date;
    } else if (req.body.year) {
      const date = new RegExp('.*' + req.body.year + '.*');
      query.date = date;
    }

    const budgetSummery = await Budget.find(query);

    res.status(201).send(budgetSummery);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBudgetSummery;
