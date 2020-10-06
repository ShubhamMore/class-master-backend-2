const Schedule = require('../../models/schedule.model');

const errorHandler = require('../../handler/error.handler');

const getTimeDifference = require('../../functions/getTimeDifference');
const getRandomString = require('../../functions/getRandomString');

const request = require('request-promise');

const newSchedule = async (req, res) => {
  try {
    const schedules = await Schedule.insertMany(req.body);

    const onlineSchedules = schedules.filter((schedule) => schedule.sessionType === 'online');

    const newOnlineScheduleRequests = new Array();
    onlineSchedules.forEach(async (schedule) => {
      const duration = getTimeDifference(schedule.date, schedule.startTime, schedule.endTime);
      const password = getRandomString(8);

      const newSchedule = {
        scheduleId: schedule._id,
        duration: duration === 0 ? 40 : duration,
        password: password,
        branch: schedule.branch,
        category: schedule.category,
        course: schedule.course,
        batch: schedule.batch,
        subject: schedule.subject,
        topic: schedule.topic,
        teacher: schedule.teacher,
        startTime: schedule.date + 'T' + schedule.startTime + ':00',
      };

      const options = {
        method: 'POST',
        url: process.env.API_URI + '/createZoomMeeting',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + req.token,
        },
        body: newSchedule,
        json: true,
      };

      newOnlineScheduleRequests.push(request(options));
    });

    Promise.all(newOnlineScheduleRequests)
      .then((resData) => {
        res.status(200).send(resData);
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newSchedule;
