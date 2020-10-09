const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const getBranchStudentNameIds = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
      status: req.body.type === 'active',
    };

    if (req.body.category && req.body.category !== '') {
      searchQuery.category = req.body.category;
    }

    const branchStudents = await BranchStudent.aggregate([
      {
        $match: searchQuery,
      },
      {
        $lookup: {
          from: 'students',
          localField: 'student', // field in the schedules collection
          foreignField: 'imsMasterId', // field in the Students collection
          as: 'students',
        },
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: [{ $arrayElemAt: ['$students', 0] }, '$$ROOT'] },
        },
      },
      { $project: { students: 0 } },
      {
        $match: {
          Student: { $ne: req.user.imsMasterId },
        },
      },
      {
        $project: {
          _id: 1,
          student: 1,
          name: 1,
          branch: 1,
          category: 1,
          admissionDate: 1,
          description: 1,
          status: 1,
        },
      },
    ]);

    res.status(200).send(branchStudents);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchStudentNameIds;
