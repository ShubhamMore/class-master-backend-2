const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const newSchedule = async (req, res) => {
  try {
    const schedule = new Schedule(req.body);

    await schedule.save();

    res.status(200).send(schedule);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newSchedule;
