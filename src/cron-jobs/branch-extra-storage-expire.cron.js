const cron = require('node-cron');
const BranchStorage = require('../models/branch-storage.model');

const getDate = () => {
  const d = new Date();
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const expireBranchExtraStorage = async () => {
  cron.schedule(
    '00 15 00 * * *', // Every day on 00:15:00
    async () => {
      const date = getDate();

      try {
        const branches = await BranchStorage.aggregate([
          { $match: { extraStorageExpireOn: { $lt: date } } },
          {
            $lookup: {
              from: 'branches',
              let: { branchId: { $toObjectId: '$branch' } },
              pipeline: [
                {
                  $match: {
                    $expr: { $eq: ['$_id', '$$branchId'] },
                  },
                },
                {
                  $project: {
                    _id: 0,
                    branchName: '$basicDetails.branchName',
                    imsMasterId: '$parentUser',
                  },
                },
              ],
              as: 'branches',
            },
          },
          {
            $unwind: '$branches',
          },
          {
            $replaceRoot: {
              newRoot: { $mergeObjects: ['$branches', '$$ROOT'] },
            },
          },
          {
            $project: {
              _id: 0,
              storagePackage: 1,
              branchName: 1,
              imsMasterId: 1,
            },
          },
        ]);

        await BranchStorage.updateMany(
          { extraStorageExpireOn: { $lt: date } },
          {
            $set: {
              storagePackage: null,
              extraStorageAssigned: null,
              // extraStorageExpireOn: null,
              totalStorageAssigned: 2147483648,
            },
          },
          { multi: true }
        );

        const userNotificationRequests = new Array();

        for (let branch of branches) {
          const message = `Your Extra Storage ${branch.storagePackage} expired for Institute ${branch.branchName}`;

          const newNotification = {
            receiverId: branch.imsMasterId,
            title: 'Extra Storage Expired',
            message: message,
          };
          const options = {
            method: 'POST',
            url: process.env.API_URI + '/sendNotification',
            headers: {
              'Content-Type': 'application/json',
              authorization: 'Bearer ' + process.env.SERVER_TOKEN,
            },
            body: newNotification,
            json: true,
          };

          userNotificationRequests.push(request(options));
        }

        try {
          Promise.all(userNotificationRequests)
            .then((resData) => {})
            .catch((e) => {});
        } catch (e) {}
      } catch (e) {}
    },
    {
      scheduled: true,
      timezone: 'Asia/Kolkata',
    }
  );
};

module.exports = expireBranchExtraStorage;
