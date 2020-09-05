const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const editSchedule = async (req, res) => {
  try {
    const schedules = req.body.schedules;
    const schedule = await Schedule.findByIdAndDelete(req.body.id);

    if (!schedule) {
      throw new Error('Schedule Not Found');
    }

    await Schedule.insertMany(schedules);

    res.status(200).send(schedule);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editSchedule;
