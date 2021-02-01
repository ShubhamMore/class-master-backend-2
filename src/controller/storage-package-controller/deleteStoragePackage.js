const StoragePackage = require('../../models/storage-package.model');
const errorHandler = require('../../handler/error.handler');

const deleteStoragePackage = async (req, res) => {
  try {
    const storagePackage = await StoragePackage.findByIdAndDelete(req.body.id);

    if (!storagePackage) {
      throw new Error('Storage Package Not Found');
    }

    res.status(200).send(storagePackage);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteStoragePackage;
