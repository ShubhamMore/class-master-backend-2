const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const saveBudget = async (req, res) => {
  try {
    const budget = new Budget(req.body);

    await budget.save();

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveBudget;
