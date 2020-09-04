const Schedule = require('../../models/schedule.model');
const errorHandler = require('../../handler/error.handler');

const day = 24 * 60 * 60 * 1000;

const convertToDateString = async (date) => {
  if (!date) {
    return '--';
  }
  date = new Date(date);
  return (
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    date.getDate().toString().padStart(2, '0')
  );
};

const dateToMilliseconds = async (date) => {
  return new Date(date).getTime();
};

const getNoOfDays = async (date, repeatUpTo) => {
  dateInMS = await dateToMilliseconds(date);
  repeatUpTpDateInMS = await dateToMilliseconds(repeatUpTo);

  const noOfDays = (repeatUpTpDateInMS - dateInMS) / day;
  return noOfDays;
};

const newSchedule = async (req, res) => {
  try {
    const schedule = req.body.schedule;

    const schedules = new Array();
    schedules.push(schedule);

    const repeatSchedule = req.body.scheduleRepeat;

    if (repeatSchedule.repeat) {
      const n = await getNoOfDays(schedule.date, repeatSchedule.repeatUpTo);
      let dateInMS = dateToMilliseconds(schedule.date);
      for (let i = 0; i < n; i++) {
        dateInMS += day;
        const date = new Date(dateInMS);
        if (repeatSchedule.repeatDays.includes(date.getDay())) {
          schedule.date = await convertToDateString(date).split('-').reverse().join('-');

          schedules.push(schedule);
        }
      }
    }

    await Schedule.insertMany(schedules);

    res.status(200).send(schedules);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newSchedule;
