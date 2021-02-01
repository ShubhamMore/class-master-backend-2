const StoragePackage = require('../../models/storage-package.model');
const errorHandler = require('../../handler/error.handler');

const newStoragePackage = async (req, res) => {
  try {
    const newStoragePackage = new StoragePackage(req.body);

    await newStoragePackage.save();

    res.status(200).send(newStoragePackage);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newStoragePackage;
