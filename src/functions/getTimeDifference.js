const getTimeDifference = (date, startTime, endTime) => {
  const start = new Date(date + 'T' + startTime + ':00').getTime();
  const end = new Date(date + 'T' + endTime + ':00').getTime();

  let difference = (end - start) / 1000;

  if (difference < 0) {
    difference *= -1;
  }

  return Math.round(difference / 60);
};

module.exports = getTimeDifference;
