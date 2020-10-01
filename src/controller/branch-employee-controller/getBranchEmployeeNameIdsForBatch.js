const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const getBranchEmployeeNameIdsForBatch = async (req, res) => {
  try {
    const branchEmployees = await BranchEmployee.aggregate([
      {
        $match: {
          branch: req.body.branch,
          role: req.body.role,
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
      { $project: { _id: 1, employee: 1, name: 1, role: 1, branch: 1 } },
    ]);
    // const branchEmployees = await BranchEmployee.find({
    //   branch: req.body.branch,
    //   role: req.body.role,
    // });

    console.log(req.body, branchEmployees);

    // const teachers = await getTeachers(branchEmployees);
    res.status(200).send(branchEmployees);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchEmployeeNameIdsForBatch;
