const BranchStorage = require('../../models/branch-storage.model');
const StoragePackage = require('../../models/storage-package.model');

const errorHandler = require('../../handler/error.handler');

const getDate = () => {
  d = new Date();
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const checkIsStorageUpgradable = async (req, res) => {
  try {
    const date = getDate();

    const branchStorage = await BranchStorage.aggregate([
      { $match: { branch: req.body.branch } },
      {
        $lookup: {
          from: 'storagepackages',
          localField: 'storagePackage',
          foreignField: 'packageName',
          as: 'storagePackages',
        },
      },
      {
        $addFields: {
          storagePackage: { $arrayElemAt: ['$storagePackages', 0] },
        },
      },
      {
        $project: {
          storagePackages: 0,
          __v: 0,
        },
      },
    ]);

    if (!branchStorage) {
      throw new Error('No Branch Storage Found');
    }

    const storagePackage = await StoragePackage.findOne({
      storagePackage: req.body.storagePackage,
    });

    const remainingDays = this.dateService.dateDifferenceInDays(
      this.dateService.getDateString(),
      this.branchStorage.extraStorageExpireOn
    );

    const remainingAmount =
      (+branchStoragePackage.price / +branchStoragePackage.validity) * +remainingDays;

    const upgradableAmount = +(price - remainingAmount).toFixed(2);

    return upgradableAmount;

    res.status(200).send({ upgradable: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = checkIsStorageUpgradable;
