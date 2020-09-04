const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const getAllSchedule = async (req, res) => {
  try {
    const schedules = await Schedule.find({
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      batch: req.body.batch,
      $and: [{ date: { $gte: req.body.startDate } }, { date: { $lte: req.body.endDate } }],
      status: true,
    });

    console.log(schedules);

    res.status(200).send(schedules);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllSchedule;
