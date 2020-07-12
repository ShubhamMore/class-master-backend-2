const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const getAdminBudgetSummeryByYear = async (req, res) => {
  try {
    const date = new RegExp('.*' + req.body.year + '.*');

    const budgetExpenseSummery = await Budget.aggregate([
      {
        $match: {
          type: '0',
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

    const budgetIncomeSummery = await Budget.aggregate([
      {
        $match: {
          type: '1',
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

    res.status(201).send({ budgetExpenseSummery, budgetIncomeSummery });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAdminBudgetSummeryByYear;
