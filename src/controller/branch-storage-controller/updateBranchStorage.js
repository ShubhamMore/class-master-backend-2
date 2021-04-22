const PaymentReceipt = require('../../models/payment-receipt.model');
const BranchStorage = require('../../models/branch-storage.model');
const StoragePackage = require('../../models/storage-package.model');

const errorHandler = require('../../handler/error.handler');

const convertToBytes = (value) => {
  const MB = 1024 * 1024;
  return +value * MB;
};

const getDate = (d) => {
  d = new Date(d);
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const storageExpireOn = (validity) => {
  const date = new Date();
  const expireOn = new Date().setDate(date.getDate() + +validity);
  return getDate(expireOn);
};

const updateBranchStorage = async (req, res) => {
  try {
    const paymentReceipt = await PaymentReceipt.findById(req.body.receipt);

    if (!paymentReceipt || !paymentReceipt.status) {
      throw new Error('Payment Not Done');
    }

    const storagePackage = await StoragePackage.findOne({ packageName: req.body.storagePackage });

    if (!storagePackage) {
      throw new Error('Storage Package not Found, Please contact Admin');
    }

    const extraStorage = convertToBytes(storagePackage.storage);
    const expireOn = storageExpireOn(storagePackage.validity);

    const branchStorage = await BranchStorage.findOne({ branch: req.body.branch });

    if (!branchStorage) {
      throw new Error('No Branch Storage Found');
    }

    const totalStorageAssigned = branchStorage.regularStorageAssigned + +extraStorage;

    await BranchStorage.findOneAndUpdate(
      { branch: req.body.branch },
      {
        storagePackage: storagePackage.packageName,
        extraStorageAssigned: +extraStorage,
        extraStorageExpireOn: expireOn,
        totalStorageAssigned: totalStorageAssigned,
      }
    );

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateBranchStorage;
