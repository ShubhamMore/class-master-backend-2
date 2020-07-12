const Salary = require('../../models/salary.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const deleteSalary = async (req, res) => {
  try {
    const salary = await Salary.findByIdAndDelete(req.body._id);
    await Budget.findOneAndDelete({ salary: salary._id });
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteSalary;
