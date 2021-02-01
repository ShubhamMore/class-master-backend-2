const BranchStorage = require('../../models/branch-storage.model');

const errorHandler = require('../../handler/error.handler');

const removeBranchExtraStorage = async (req, res) => {
  try {
    const branchStorage = await BranchStorage.findOne({ branch: req.body.branch });

    const totalStorageAssigned = +branchStorage.totalStorageAssigned - +branchStorage.extraStorage;
    const totalStorageUsed = +branchStorage.regularStorageAssigned;

    await BranchStorage.findOneAndUpdate(
      { branch: req.body.branch },
      {
        extraStorage: null,
        extraStorageAssigned: 0,
        extraStorageExpireOn: null,
        totalStorageAssigned,
        totalStorageUsed,
      }
    );

    if (!branchStorage) {
      throw new Error('No Branch Storage Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = removeBranchExtraStorage;
