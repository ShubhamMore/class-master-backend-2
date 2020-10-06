const Schedule = require('../../models/schedule.model');

const request = require('request-promise');

const errorHandler = require('../../handler/error.handler');

const deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.body.id);

    if (!schedule) {
      throw new Error('Schedule Not Found');
    }

    if (schedule.sessionType === 'online') {
      const deleteBody = {
        scheduleId: req.body.id,
        branch: schedule.branch,
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

      await request(options);
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteSchedule;
