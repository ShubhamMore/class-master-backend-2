const BranchEmployee = require('../../models/branch-employee.model');
const errorHandler = require('../../handler/error.handler');

const mongoose = require('mongoose');
const sendNotification = require('../../notification/sendNotification');

const newBranchEmployee = async (req, res) => {
  try {
    const branchEmployee = new BranchEmployee(req.body);

    await branchEmployee.save();

    const employeeBranchDetails = await BranchEmployee.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(branchEmployee._id),
        },
      },
      {
        $addFields: {
          branchId: {
            $toObjectId: '$branch',
          },
          categoryId: {
            $toObjectId: '$category',
          },
        },
      },
      {
        $lookup: { from: 'branches', localField: 'branchId', foreignField: '_id', as: 'branches' },
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'employee',
          foreignField: 'imsMasterId',
          as: 'employees',
        },
      },
      {
        $addFields: {
          branch: { $arrayElemAt: ['$branches', 0] },
          employee: { $arrayElemAt: ['$employees', 0] },
        },
      },
      {
        $addFields: {
          category: {
            $filter: {
              input: '$branch.categories',
              as: 'curCategory',
              cond: {
                $eq: ['$$curCategory._id', '$categoryId'],
              },
            },
          },
        },
      },
      {
        $project: {
          branches: 0,
          'branch.categories': 0,
          'branch.currentPlanDetails': 0,
          employees: 0,
          branchId: 0,
          categoryId: 0,
        },
      },
    ]);

    const notificationMessage = `Hii ${employeeBranchDetails[0].employee.name}, you are successfully registered in Institute ${employeeBranchDetails[0].branch.basicDetails.branchName} (${employeeBranchDetails[0].category.category}) - ${employeeBranchDetails[0].branch.address.city} for ${branchEmployee.role} Role.`;

    const notificationTitle = 'New Branch Registered';
    const receiverId = employeeBranchDetails[0].employee.imsMasterId;

    await sendNotification(notificationTitle, notificationMessage, receiverId);

    res.status(200).send({ success: true });
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = newBranchEmployee;
