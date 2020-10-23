const Schedule = require('../../models/schedule.model');

const getTimeDifference = require('../../functions/getTimeDifference');
const getRandomString = require('../../functions/getRandomString');

const request = require('request-promise');

const errorHandler = require('../../handler/error.handler');

const editSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.body._id, req.body);

    if (!schedule) {
      throw new Error('Schedule Not Found');
    }

    let response = null;

    if (schedule.sessionType === 'classroom' && req.body.sessionType === 'online') {
      // new online meeting

      const duration = getTimeDifference(req.body.date, req.body.startTime, req.body.endTime);
      const password = getRandomString(8);

      const newSchedule = {
        scheduleId: req.body._id,
        duration: duration === 0 ? 40 : duration,
        password: password,
        branch: req.body.branch,
        category: req.body.category,
        course: req.body.course,
        batch: req.body.batch,
        subject: req.body.subject,
        topic: req.body.topic,
        teacher: req.body.teacher,
        startTime: req.body.date + 'T' + req.body.startTime + ':00',
        type: 'edit',
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

      response = await request(options);
    } else if (schedule.sessionType === 'online' && req.body.sessionType === 'online') {
      // update online meeting
      const duration = getTimeDifference(req.body.date, req.body.startTime, req.body.endTime);
      const password = getRandomString(8);

      const updatedSchedule = {
        scheduleId: req.body._id,
        duration: duration === 0 ? 40 : duration,
        password: password,
        branch: req.body.branch,
        category: req.body.category,
        course: req.body.course,
        batch: req.body.batch,
        subject: req.body.subject,
        topic: req.body.topic,
        teacher: req.body.teacher,
        startTime: req.body.date + 'T' + req.body.startTime + ':00',
      };

      const options = {
        method: 'POST',
        url: process.env.API_URI + '/updateZoomMeeting',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + req.token,
        },
        body: updatedSchedule,
        json: true,
      };

      response = await request(options);
    } else if (schedule.sessionType === 'online' && req.body.sessionType === 'classroom') {
      // delete online meeting

      const deleteBody = {
        scheduleId: req.body._id,
        branch: req.body.branch,
      };

      const options = {
        method: 'POST',
        url: process.env.API_URI + '/deleteZoomMeeting',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + req.token,
        },
        body: deleteBody,
        json: true,
      };

      response = await request(options);
    } else {
      response = schedule;
    }
    res.status(200).send(response);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editSchedule;
