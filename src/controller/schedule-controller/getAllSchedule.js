const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const getAllSchedule = async (req, res) => {
  try {
    const schedules = await Schedule.find({
      course: req.body.course,
      batch: req.body.batch,
      status: true,
    });

    res.status(200).send(schedules);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllSchedule;
