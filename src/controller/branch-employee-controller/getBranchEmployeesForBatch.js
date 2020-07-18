const Employee = require('../../models/employee.model');
const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getTeachers = async (branchEmployees) => {
  const teachers = new Array();

  branchEmployees.forEach(async (branchEmployee) => {
    const employee = await Employee.findOne({ imsMasterId: branchEmployee.employee });

    if (employee) {
      const teacher = {
        imsMasterId: employee.imsMasterId,
        name: employee.name,
      };

      teachers.push(teacher);
    }
  });

  return teachers;
};

const getBranchEmployeesForBatch = async (req, res) => {
  try {
    const branchEmployees = await BranchEmployee.find({
      branch: req.body.branch,
      role: req.body.role,
    });

    // const teachers = await getTeachers(branchEmployees);

    res.status(200).send(branchEmployees);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeesForBatch;
