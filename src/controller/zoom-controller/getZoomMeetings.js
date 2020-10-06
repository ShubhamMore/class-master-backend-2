const OnlineClass = require('../../models/online-class.model');
const errorHandler = require('../../handler/error.handler');

const getZoomMeetings = async (req, res) => {
  try {
    const meetings = await OnlineClass.find();

    res.status(200).send(meetings);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getZoomMeetings;
