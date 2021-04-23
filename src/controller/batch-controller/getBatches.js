const Branch = require('../../models/branch.model');
const BranchEmployee = require('../../models/branch-employee.model');
const Batch = require('../../models/batch.model');
const mongoose = require('mongoose');
const errorHandler = require('../../handler/error.handler');

const getBatchesByCourse = async (req, res) => {
  try {
    let employeeUser = null;
    if (req.user.userRole === 'employee') {
      employeeUser = await BranchEmployee.findOne({
        branch: req.body.branch,
        employee: req.user.imsMasterId,
      });

      if (!employeeUser) {
        throw new Error('You are not authorized user to Access this Data');
      }
    }

    let categories = new Array();

    const searchQuery = {
      branch: req.body.branch,
    };

    if (employeeUser && (employeeUser.role === 'teacher' || employeeUser.role === 'councillor')) {
      searchQuery.status = true;
    }

    if (req.body.category && req.body.category !== '') {
      categories.push(req.body.category);
      searchQuery.category = { $all: categories };
    } else if (searchQuery.status) {
      const branchCategories = await Branch.aggregate([
        {
          $match: {
            _id: mongoose.Types.ObjectId(req.body.branch),
          },
        },
        {
          $project: {
            _id: 0,
            categories: 1,
          },
        },
        {
          $unwind: '$categories',
        },
        {
          $replaceRoot: {
            newRoot: { $mergeObjects: ['$categories', '$$ROOT'] },
          },
        },
        { $project: { categories: 0 } },
        {
          $match: {
            status: true,
          },
        },
        { $project: { status: 0, category: 0 } },
      ]);

      branchCategories.forEach((category) => {
        categories.push(category._id);
      });

      searchQuery.category = { $all: categories };
    }

    if (req.body.course && req.body.course !== '') {
      searchQuery.course = req.body.course;
    }

    const batches = await Batch.find(searchQuery);

    res.status(200).send(batches);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = getBatchesByCourse;
