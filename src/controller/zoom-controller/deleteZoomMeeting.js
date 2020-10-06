const OnlineClass = require('../../models/online-class.model');
const request = require('request-promise');
const errorHandler = require('../../handler/error.handler');

const deletedZoomMeeting = async (req, res) => {
  try {
    const meeting = await OnlineClass.findOneAndDelete({
      _id: req.body._id,
    });

    if (!meeting) {
      throw new Error('No Meeting Found');
    }

    const options = {
      method: 'DELETE',
      url: 'https://api.zoom.us/v2/meetings/' + meeting.meetingId,
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + req.zoom.access_token,
      },
    };

    const info = await request(options);

    res.status(200).send(meeting);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deletedZoomMeeting;
