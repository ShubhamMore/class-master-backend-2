const cron = require('node-cron');
const Student = require('../models/student.model');

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

const birthdayWishes = async () => {
  cron.schedule(
    '00 00 07 * * *', // Every day on 07:00:00
    async () => {
      const date = getDate();

      try {
        const users = await Student.find(
          {
            birthDate: date,
          },
          {
            imsMasterId: 1,
            name: 1,
            _id: 0,
          }
        );

        const userNotificationRequests = new Array();

        for (let user of users) {
          const birthdayMessage = `The Class Master wishes a very happy birthday to one of the brightest student. May you keep shining like that always.`;

          const newNotification = {
            receiverId: user.imsMasterId,
            title: 'Happy Birthday',
            message: birthdayMessage,
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

module.exports = birthdayWishes;
