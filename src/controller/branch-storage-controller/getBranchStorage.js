const BranchStorage = require('../../models/branch-storage.model');
const errorHandler = require('../../handler/error.handler');

const getBranchStorage = async (req, res) => {
  try {
    const branchStorage = await BranchStorage.findOne({ branch: req.body.branch });

    if (!branchStorage) {
      throw new Error('No Branch Storage Found');
    }

    res.status(200).send(branchStorage);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchStorage;
