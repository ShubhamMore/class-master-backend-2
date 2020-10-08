const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeeNameIds = async (req, res) => {
  try {
    const branchEmployees = await BranchEmployee.aggregate([
      {
        $match: {
          branch: req.body.branch,
          status: req.body.type === 'active',
        },
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'employee', // field in the schedules collection
          foreignField: 'imsMasterId', // field in the employees collection
          as: 'employees',
        },
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: [{ $arrayElemAt: ['$employees', 0] }, '$$ROOT'] },
        },
      },
      { $project: { employees: 0 } },
      {
        $match: {
          employee: { $ne: req.user.imsMasterId },
        },
      },
      {
        $project: {
          _id: 1,
          employee: 1,
          name: 1,
          role: 1,
          branch: 1,
          description: 1,
          basicSalary: 1,
          status: 1,
        },
      },
    ]);

    res.status(200).send(branchEmployees);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeeNameIds;
