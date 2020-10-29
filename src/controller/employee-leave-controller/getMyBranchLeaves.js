const EmployeeLeave = require('../../models/employee-leave.model');
const errorHandler = require('../../handler/error.handler');

const getMyBranchLeaves = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
      employee: req.user.imsMasterId,
    };

    if (req.body.year !== '' && req.body.month === '') {
      searchQuery.date = new RegExp('.*' + req.body.year + '.*');
    } else if (req.body.month !== '' && req.body.year !== '') {
      searchQuery.date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
    }

    const employeeLeaves = await EmployeeLeave.aggregate([
      { $match: searchQuery },
      {
        $lookup: {
          from: 'employees',
          localField: 'monitoredBy',
          foreignField: 'imsMasterId',
          as: 'employees',
        },
      },
      {
        $addFields: {
          employee: { $arrayElemAt: ['$employees', 0] },
        },
      },
      {
        $project: {
          monitoredBy: 0,
          employees: 0,
        },
      },
      {
        $addFields: {
          monitoredBy: '$employee.name',
        },
      },
      {
        $project: {
          employee: 0,
        },
      },
    ]);

    res.status(200).send(employeeLeaves);
  } catch (e) {
    console.log(e);

    errorHandler(e, 400, res);
  }
};

module.exports = getMyBranchLeaves;
