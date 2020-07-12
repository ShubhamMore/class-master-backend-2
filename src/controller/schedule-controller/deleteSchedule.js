const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.body._id);

    if (!schedule) {
      throw new Error('Schedule Not Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteSchedule;
