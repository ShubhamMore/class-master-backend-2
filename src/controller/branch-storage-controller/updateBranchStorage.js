const BranchStorage = require('../../models/branch-storage.model');
const StoragePackage = require('../../models/storage-package.model');

const errorHandler = require('../../handler/error.handler');

const updateBranchStorage = async (req, res) => {
  try {
    const storagePackage = await StoragePackage.findById(req.body.storagePackage);

    const date = new Date();

    const expireOn = new Date().setDate(date.getDate() + +storagePackage.validity);

    const branchStorage = await BranchStorage.findOneAndUpdate(
      { branch: req.body.branch },
      {
        storagePackage: storagePackage._id,
        extraStorageAssigned: +storagePackage.storageSize,
        extraStorageExpireOn: expireOn,
        $inc: { totalStorageAssigned: +extraStorage.storageSize },
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

module.exports = updateBranchStorage;
