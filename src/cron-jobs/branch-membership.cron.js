const cron = require('node-cron');
const Branch = require('../models/branch.model');

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

const branchMembershipValidation = async () => {
  cron.schedule(
    '45 59 23 * * *', // Every day on 23:59:45
    async () => {
      const date = getDate();

      try {
        await Branch.updateMany(
          { 'currentPlanDetails.expiryDate': { $lte: date } },
          { $set: { status: false } },
          { multi: true }
        );

        const branches = await Branch.find(
          { 'currentPlanDetails.expiryDate': { $lte: date } },
          { _id: 0, branchName: '$basicDetails.branchName', imsMasterId: '$parentUser' }
        );

        const userNotificationRequests = new Array();

        for (let branch of branches) {
          const deactivationMessage = `Your Membership expired of Institute ${branch.branchName}`;

          const newNotification = {
            receiverId: branch.imsMasterId,
            title: 'Institute Deactivated',
            message: deactivationMessage,
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

module.exports = branchMembershipValidation;
