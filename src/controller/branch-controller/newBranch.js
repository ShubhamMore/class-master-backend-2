const Branch = require('../../models/branch.model');
const BranchStorage = require('../../models/branch-storage.model');

const errorHandler = require('../../handler/error.handler');

const newBranch = async (req, res) => {
  try {
    const branchData = req.body;

    branchData.parentUser = req.user.imsMasterId;

    const branch = new Branch(branchData);
    await branch.save();

    const branchStorage = new BranchStorage({ branch: branch._id });
    await branchStorage.save();

    res.status(201).send({ branchId: branch._id });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newBranch;
