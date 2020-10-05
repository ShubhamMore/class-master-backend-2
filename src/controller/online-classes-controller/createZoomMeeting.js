const OnlineClass = require('../model/onlineClass.model');
const request = require('request-promise');

const createZoomMeeting = async (req, res) => {
  try {
    const createMeeting = {
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
      method: 'POST',
      url: 'https://api.zoom.us/v2/users/me/meetings',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + req.zoom.accessToken,
      },
      body: createMeeting,
      json: true,
    };

    const meetingDetails = await request(options);

    const newMeeting = {
      topic: req.body.topic,
      duration: req.body.duration,
      password: req.body.password,
      agenda: req.body.agenda,
      joinUrl: meetingDetails.join_url,
      meetingId: meetingDetails.id,
      startUrl: meetingDetails.start_url,
      startTime: req.body.startTime,
      batchId: req.body.batchId,
      courseId: req.body.courseId,
      instituteId: req.body.instituteId,
      hostId: req.body.teacherId,
      hostEmail: teacher.basicDetails.employeeEmail,
      hostName: teacher.basicDetails.name,
    };

    const newOnlineClass = new OnlineClass(newMeeting);
    await newOnlineClass.save();
  } catch (error) {}
};

module.exports = createZoomMeeting;
