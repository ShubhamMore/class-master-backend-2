const Salary = require('../../models/salary.model');
const errorHandler = require('../../handler/error.handler');

const getAllSalariesForStaff = async (req, res) => {
  try {
    const salary = await Salary.find({
      staff: req.body.staff,
      status: '1',
    });
    res.status(200).send(salary);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllSalariesForStaff;
