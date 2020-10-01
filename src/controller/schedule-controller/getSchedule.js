const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.body.id);

    if (!schedule) {
      throw new Error('Schedule Not Found');
    }

    res.status(200).send(schedule);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getSchedule;
