const OnlineClass = require('../../models/online-class.model');
const request = require('request-promise');
const errorHandler = require('../../handler/error.handler');

const updateZoomMeeting = async (req, res) => {
  try {
    const teacher = await Employee.findOne({
      _id: req.body.teacherId,
    });

    const updatedMeeting = {
      topic: req.body.topic,
      type: 2,
      start_time: req.body.startTime,
      duration: req.body.duration,
      schedule_for: null,
      timezone: 'Asia/Calcutta',
      password: req.body.password,
      agenda: req.body.topic,
      settings: {
        host_video: false,
        participant_video: false,
        cn_meeting: false,
        in_meeting: true,
        join_before_host: true,
        mute_upon_entry: true,
        watermark: false,
        use_pmi: false,
        approval_type: 2,
        registration_type: 1,
        audio: 'both',
        alternative_hosts: teacher.email,
        auto_recording: 'cloud',
        enforce_login: false,
        enforce_login_domains: null,
        alternative_hosts: null,
        global_dial_in_countries: [],
        registrants_email_notification: false,
      },
    };

    const options = {
      method: 'PATCH',
      url: 'https://api.zoom.us/v2/meetings/' + req.body.meetingId,
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + req.zoom.access_token,
      },
      body: updatedMeeting,
      json: true,
    };

    const meetingDetails = await request(options);

    const meeting = await OnlineClass.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: {
          topic: req.body.topic,
          duration: req.body.duration,
          password: req.body.password,
          agenda: req.body.agenda,
          startTime: req.body.startTime,
          batchId: req.body.batchId,
          courseId: req.body.courseId,
          instituteId: req.body.instituteId,
          hostId: req.body.teacherId,
          hostEmail: teacher.email,
          hostName: teacher.name,
        },
      }
    );

    res.status(200).send(meeting);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateZoomMeeting;
