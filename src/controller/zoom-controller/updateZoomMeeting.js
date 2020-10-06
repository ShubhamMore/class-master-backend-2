const Employee = require('../../models/employee.model');
const OnlineClass = require('../../models/online-class.model');
const request = require('request-promise');
const errorHandler = require('../../handler/error.handler');

const updateZoomMeeting = async (req, res) => {
  try {
    const teacher = await Employee.findOne({ imsMasterId: req.body.teacher });

    const meeting = await OnlineClass.findOneAndUpdate(
      {
        schedule: req.body.scheduleId,
      },
      {
        $set: {
          branch: req.body.branch,
          category: req.body.category,
          batch: req.body.batch,
          course: req.body.course,
          subject: req.body.subject,
          topic: req.body.topic,
          teacher: req.body.teacher,
          password: req.body.password,
          startTime: req.body.startTime,
          duration: req.body.duration,
        },
      }
    );

    if (!meeting) {
      throw new Error('Updation Failed, Online Zoom Lecture Not Found');
    }

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
        alternative_hosts: teacher ? teacher.email : req.user.email,
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
      url: 'https://api.zoom.us/v2/meetings/' + meeting.meetingId,
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + req.zoomCredentials.onlineClassesKeys.accessToken,
      },
      body: updatedMeeting,
      json: true,
    };

    const response = await request(options);

    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = updateZoomMeeting;
