const EmployeeSalary = require('../../models/employee-salary.model');
const errorHandler = require('../../handler/error.handler');

const getMyBranchSalaries = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
      employee: req.user.imsMasterId,
      status: true,
    };

    let date = null;

    if (req.body.year !== '' && req.body.month === '') {
      date = new RegExp('.*' + req.body.year + '.*');
    }

    if (req.body.month !== '' && req.body.year !== '') {
      date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
    }

    if (date) {
      searchQuery.date = date;
    }

    const employeeSalary = await EmployeeSalary.aggregate([
      {
        $match: searchQuery,
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'employee', // field in the studentCourses collection
          foreignField: 'imsMasterId', // field in the Students collection
          as: 'employees',
        },
      },
      {
        $addFields: {
          employeeData: {
            $arrayElemAt: ['$employees', 0],
          },
        },
      },
      {
        $project: {
          employees: 0,
        },
      },
      {
        $addFields: {
          name: '$employeeData.name',
        },
      },
      {
        $project: {
          employeeData: 0,
        },
      },
    ]);

    if (!employeeSalary) {
      throw new Error('Employee Salary Not Found');
    }

    res.status(200).send(employeeSalary);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getMyBranchSalaries;
