const StoragePackage = require('../../models/storage-package.model');
const errorHandler = require('../../handler/error.handler');

const getStoragePackage = async (req, res) => {
  try {
    const storagePackage = await StoragePackage.findById(req.body.id);

    if (!storagePackage) {
      throw new Error('Storage Package Not Found');
    }

    res.status(200).send(storagePackage);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStoragePackage;
