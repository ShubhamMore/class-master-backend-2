const BranchEmployee = require('../../models/branch-employee.model');
const Branch = require('../../models/branch.model');
const mongoose = require('mongoose');

const errorHandler = require('../../handler/error.handler');

const getBranch = async (req, res) => {
  try {
    let employeeUser = null;

    if (req.user.userRole === 'employee') {
      employeeUser = await BranchEmployee.findOne({
        branch: req.body.id,
        employee: req.user.imsMasterId,
      });

      if (!employeeUser) {
        throw new Error('You are not authorized user to Access this Data');
      }
    }

    let branch = null;

    if (employeeUser && (employeeUser.role === 'teacher' || employeeUser.role === 'councillor')) {
      const branchData = await Branch.aggregate([
        {
          $match: {
            _id: mongoose.Types.ObjectId(req.body.id),
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

      if (branchData.length === 1) {
        branch = branchData[0];
      }
    } else {
      branch = await Branch.findById(req.body.id);
    }

    if (!branch) {
      throw new Error('No Branch Found');
    }

    res.status(200).send(branch);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranch;
