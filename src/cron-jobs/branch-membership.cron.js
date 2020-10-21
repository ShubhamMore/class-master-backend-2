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
      await Branch.updateMany(
        { 'currentPlanDetails.expiryDate': { $lte: date } },
        { $set: { status: false } },
        { multi: true }
      );
    },
    {
      scheduled: true,
      timezone: 'Asia/Kolkata',
    }
  );
};

module.exports = branchMembershipValidation;
