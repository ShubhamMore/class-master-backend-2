const Salary = require('../../models/salary.model');
const Staff = require('../../models/staff.model');
const errorHandler = require('../../handler/error.handler');

const findBranchName = require('../../functions/findBranchName');

const getSalary = async (req, res) => {
  try {
    const salary = await Salary.findById(req.body._id);
    const staff = await Staff.findById(salary.staff);
    salary.branch = await findBranchName(salary.branch);
    salary.staff = staff.name;

    res.status(200).send(salary);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getSalary;
