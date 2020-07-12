const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const editSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.body._id, req.body);

    if (!schedule) {
      throw new Error('Schedule Not Found');
    }

    res.status(200).send(schedule);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editSchedule;
