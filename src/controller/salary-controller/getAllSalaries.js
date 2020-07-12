const Salary = require('../../models/salary.model');
const errorHandler = require('../../handler/error.handler');

const getAllSalaries = async (req, res) => {
  try {
    const salary = await Salary.find({ staff: req.body.staff });
    res.status(200).send(salary);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllSalaries;
