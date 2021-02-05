const cron = require('node-cron');
const BranchStorage = require('../models/branch-storage.model');
const CourseMaterial = require('../models/course-material.model');
const LectureMaterial = require('../models/lecture-material.model');

const getDate = () => {
  let d = new Date();
  const tempDate = d.setDate(d.getDate() - 7);

  d = new Date(tempDate);

  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const deleteBranchExtraStorage = async () => {
  cron.schedule(
    '00 45 00 * * *', // Every day on 00:15:00
    async () => {
      const date = getDate();

      try {
        const branches = await BranchStorage.aggregate([
          { $match: { extraStorageExpireOn: date } },
        ]);

        await BranchStorage.updateMany(
          { extraStorageExpireOn: { $lt: date } },
          {
            $set: {
              extraStorageExpireOn: null,
            },
          },
          { multi: true }
        );

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

module.exports = deleteBranchExtraStorage;
