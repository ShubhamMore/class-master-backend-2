const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const getBudget = async (req, res) => {
  try {
    const budget = await Budget.findById(req.body.id);

    if (!budget) {
      throw new Error('No Budget Found');
    }

    res.status(201).send(budget);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBudget;
