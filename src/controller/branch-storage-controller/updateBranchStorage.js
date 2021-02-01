const BranchStorage = require('../../models/branch-storage.model');
const ExtraStorage = require('../../models/extra-storage.model');

const errorHandler = require('../../handler/error.handler');

const updateBranchStorage = async (req, res) => {
  try {
    const extraStorage = await ExtraStorage.findById(req.body.extraStorage);

    const date = new Date();

    const expireOn = new Date().setDate(date.getDate() + +extraStorage.validity);

    const branchStorage = await BranchStorage.findOneAndUpdate(
      { branch: req.body.branch },
      {
        extraStorage: extraStorage._id,
        extraStorageAssigned: +extraStorage.storageSize,
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
