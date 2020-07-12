const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndRemove(req.body._id);

    if (!budget) {
      throw new Error('No Budget Found');
    }

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteBudget;
