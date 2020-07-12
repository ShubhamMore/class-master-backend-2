const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getBranchesForStudent = async (req, res) => {
  try {
    if (!req.body.classMasterId) {
      throw new Error('Class Master Id is not provided');
    }

    const branches = await Branch.find({ parentUser: req.body.classMasterId });

    res.status(200).send(branches);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchesForStudent;
