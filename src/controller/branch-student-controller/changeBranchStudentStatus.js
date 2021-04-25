const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const changeBranchStudentStatus = async (req, res) => {
  try {
    const branchStudent = await BranchStudent.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    if (!branchStudent) {
      throw new Error('No Branch Student Found, Status Updation Failed');
    }

    const studentBranchDetails = await BranchStudent.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(branchStudent._id),
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
          from: 'students',
          localField: 'student',
          foreignField: 'imsMasterId',
          as: 'students',
        },
      },
      {
        $addFields: {
          branch: { $arrayElemAt: ['$branches', 0] },
          student: { $arrayElemAt: ['$students', 0] },
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
          students: 0,
          branchId: 0,
          categoryId: 0,
        },
      },
    ]);

    if (studentBranchDetails) {
      const notificationMessage = `Hii ${studentBranchDetails[0].student.name}, you are ${
        req.body.status ? 'Activated' : 'Incactivared'
      } in Institute ${studentBranchDetails[0].branch.basicDetails.branchName} (${
        studentBranchDetails[0].category.category
      }) - ${studentBranchDetails[0].branch.address.city}.`;

      const notificationTitle = `${req.body.status ? 'Activated' : 'Incactivared'} in Institute ${
        employeeBranchDetails[0].branch.basicDetails.branchName
      }`;

      const receiverId = studentBranchDetails[0].student.imsMasterId;

      await sendNotification(notificationTitle, notificationMessage, receiverId);
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeBranchStudentStatus;
