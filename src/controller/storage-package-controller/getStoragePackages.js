const StoragePackage = require('../../models/storage-package.model');
const errorHandler = require('../../handler/error.handler');

const getStoragePackages = async (req, res) => {
  try {
    let storagePackages = [];

    if (req.user.userRole === 'admin') {
      storagePackages = await StoragePackage.find();
    } else {
      storagePackages = await StoragePackage.find({ status: true });
    }

    res.status(200).send(storagePackages);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStoragePackages;
