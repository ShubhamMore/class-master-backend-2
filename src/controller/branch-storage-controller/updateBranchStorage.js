const BranchStorage = require('../../models/branch-storage.model');
const StoragePackage = require('../../models/storage-package.model');

const errorHandler = require('../../handler/error.handler');

const convertToBytes = (value) => {
  const MB = 1024 * 1024;
  return +value * MB;
};

const storageExpireOn = (validity) => {
  const date = new Date();
  return new Date().setDate(date.getDate() + +validity);
};

const updateBranchStorage = async (req, res) => {
  try {
    const storagePackage = await StoragePackage.findById(req.body.storagePackage);

    const extraStorage = convertToBytes(extraStorage.storageSize);
    const expireOn = storageExpireOn(extraStorage.validity);

    const branchStorage = await BranchStorage.findOneAndUpdate(
      { branch: req.body.branch },
      {
        storagePackage: storagePackage._id,
        extraStorageAssigned: +extraStorage,
        extraStorageExpireOn: expireOn,
        $inc: { totalStorageAssigned: +extraStorage },
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
