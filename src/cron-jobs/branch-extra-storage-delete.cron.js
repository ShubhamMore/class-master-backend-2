const cron = require('node-cron');
const StoragePackage = require('../models/storage-package.model');

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

const deleteBranchExtraStorage = async () => {
  cron.schedule(
    '00 00 07 * * *', // Every day on 07:00:00
    async () => {
      try {
        const date = getDate();
      } catch (e) {}
    },
    {
      scheduled: true,
      timezone: 'Asia/Kolkata',
    }
  );
};

module.exports = deleteBranchExtraStorage;
