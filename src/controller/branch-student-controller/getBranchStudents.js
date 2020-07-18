const Student = require('../../models/student.model');
const BranchStudent = require('../../models/branch-student.model');
const errorHandler = require('../../handler/error.handler');

const getBranchStudents = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
      status: req.body.type === 'active',
    };

    if (req.body.category && req.body.category !== '') {
      searchQuery.category = req.body.category;
    }

    const branchStudent = await BranchStudent.find(searchQuery);

    res.status(200).send(branchStudent);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchStudents;
