const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const getBudgetForBranchDashboard = async (req, res) => {
  try {
    if (!req.body.year) {
      throw new Error('Year is Required');
    }

    const date = new RegExp('.*' + req.body.year + '.*');

    const budgetIncomeSummery = Budget.aggregate([
      {
        $match: {
          branch: req.body.branch,
          type: 'income',
          date,
        },
      },
      {
        $group: {
          _id: { $month: { $toDate: '$date' } },
          amount: { $sum: { $toInt: '$amount' } },
        },
      },
    ]);

    const budgetExpenseSummery = Budget.aggregate([
      {
        $match: {
          branch: req.body.branch,
          type: 'expense',
          date,
        },
      },
      {
        $group: {
          _id: { $month: { $toDate: '$date' } },
          amount: { $sum: { $toInt: '$amount' } },
        },
      },
    ]);

    Promise.all([budgetIncomeSummery, budgetExpenseSummery])
      .then((resData) => {
        res.status(201).send({ budgetIncomeSummery: resData[0], budgetExpenseSummery: resData[1] });
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBudgetForBranchDashboard;
