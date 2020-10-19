const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const getBranchesForStudent = async (req, res) => {
  try {
    const branches = await BranchStudent.aggregate([
      {
        $match: {
          student: req.user.imsMasterId,
        },
      },
      {
        $project: {
          _id: 0,
          branch: {
            $toObjectId: '$branch',
          },
        },
      },
      {
        $lookup: {
          from: 'branches',
          localField: 'branch', // field in the branchEmployees collection
          foreignField: '_id', // field in the branches collection
          as: 'branches',
        },
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: [{ $arrayElemAt: ['$branches', 0] }, '$$ROOT'] },
        },
      },
      { $project: { branches: 0, currentPlanDetails: 0, branch: 0 } },
      {
        $match: {
          status: true,
        },
      },
      {
        $project: {
          address: 1,
          status: 1,
          basicDetails: 1,
          parentUser: 1,
          categories: {
            $filter: {
              input: '$categories',
              as: 'category',
              cond: {
                $eq: ['$$category.status', true],
              },
            },
          },
        },
      },
    ]);

    res.status(200).send(branches);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchesForStudent;
