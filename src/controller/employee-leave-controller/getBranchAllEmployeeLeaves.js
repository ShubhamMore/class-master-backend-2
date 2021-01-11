const EmployeeLeave = require('../../models/employee-leave.model');
const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchAllEmployeeLeaves = async (req, res) => {
  try {
    let employeeUser = null;

    if (req.user.userRole === 'employee') {
      employeeUser = await BranchEmployee.findOne({ employee: req.user.imsMasterId });

      if (!employeeUser || employeeUser.role !== 'manager') {
        throw new Error('You are not authorized user to Access this Data');
      }
    }

    const searchQuery = {
      branch: req.body.branch,
    };

    if (req.body.employee !== '' && req.body.employee !== req.user.employee) {
      searchQuery.employee = req.body.employee;
    }

    if (req.body.year !== '' && req.body.month === '') {
      searchQuery.date = new RegExp('.*' + req.body.year + '.*');
    } else if (req.body.month !== '' && req.body.year !== '') {
      searchQuery.date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
    }

    const employeeLeaves = await EmployeeLeave.aggregate([
      { $match: searchQuery },
      {
        $match: {
          employee: { $ne: req.user.imsMasterId },
        },
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'monitoredBy',
          foreignField: 'imsMasterId',
          as: 'employees',
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'monitoredBy',
          foreignField: 'imsMasterId',
          as: 'institutes',
        },
      },
      {
        $addFields: {
          monitoredUser: { $setUnion: ['$employees', '$institutes'] },
        },
      },

      {
        $project: {
          employees: 0,
          institutes: 0,
        },
      },
      {
        $addFields: {
          myEmployee: { $arrayElemAt: ['$monitoredUser', 0] },
        },
      },
      {
        $project: {
          monitoredBy: 0,
          monitoredUser: 0,
        },
      },
      {
        $addFields: {
          monitoredBy: '$myEmployee.name',
        },
      },
      {
        $project: {
          myEmployee: 0,
        },
      },
    ]);

    res.status(200).send(employeeLeaves);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchAllEmployeeLeaves;
