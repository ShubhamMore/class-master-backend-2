const OnlineClass = require('../../models/online-class.model');
const errorHandler = require('../../handler/error.handler');

const getZoomMeeting = async (req, res) => {
  try {
    const meeting = await OnlineClass.findOne({ schedule: req.body.lecture });
    if (!meeting) {
      throw new Error('Meeting Not Found');
    }
    res.status(200).send(meeting);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getZoomMeeting;
