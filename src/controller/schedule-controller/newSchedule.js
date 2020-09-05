const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const newSchedule = async (req, res) => {
  try {
    const schedules = req.body;

    console.log(req.body);
    await Schedule.insertMany(schedules);

    res.status(200).send(schedules);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newSchedule;
