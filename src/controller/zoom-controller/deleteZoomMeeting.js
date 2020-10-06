const OnlineClass = require('../../models/online-class.model');
const request = require('request-promise');
const errorHandler = require('../../handler/error.handler');

const deletedZoomMeeting = async (req, res) => {
  try {
    const meeting = await OnlineClass.findOneAndDelete({
      schedule: req.body.scheduleId,
    });

    if (!meeting) {
      throw new Error('Deletion Failed, No Meeting Found');
    }

    const options = {
      method: 'DELETE',
      url: 'https://api.zoom.us/v2/meetings/' + meeting.meetingId,
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + req.zoomCredentials.onlineClassesKeys.accessToken,
      },
    };

    const response = await request(options);

    res.status(200).send(response);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deletedZoomMeeting;
