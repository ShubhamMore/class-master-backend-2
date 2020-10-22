const User = require('../../models/user.model');
const OnlineClass = require('../../models/online-class.model');
const errorHandler = require('../../handler/error.handler');
const crypto = require('crypto');

const getZoomMeetingSignature = async (req, res) => {
  try {
    const lecture = req.body.lecture;
    const user = await User.findOne({ imsMasterId: req.body.user }, { imsMasterId: 1 });

    if (!user) {
      throw new Error('Invalid User');
    }

    // const onlineClass = await OnlineClass.findById(req.body.id);
    const onlineClass = await OnlineClass.aggregate([
      {
        $match: {
          schedule: lecture,
        },
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'teacher',
          foreignField: 'imsMasterId',
          as: 'host',
        },
      },
      {
        $addFields: {
          host: {
            $arrayElemAt: ['$host', 0],
          },
        },
      },
      {
        $project: {
          meetingNumber: '$meetingId',
          teacher: 1,
          password: 1,
          userName: '$host.name',
          userEmail: '$host.email',
        },
      },
    ]);

    const myClass = { ...onlineClass[0] };

    if (!myClass.meetingNumber) {
      throw new Error('Online Lecture not Found');
    }

    const meetingNumber = myClass.meetingNumber;
    // const role = myClass.teacher === user.imsMasterId ? 1 : 0;
    const role = 1;

    delete myClass.teacher;

    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(
      process.env.ZOOM_JWT_API_KEY + meetingNumber + timestamp + role
    ).toString('base64');
    const hash = crypto
      .createHmac('sha256', process.env.ZOOM_JWT_SECRET_KEY)
      .update(msg)
      .digest('base64');
    const signature = Buffer.from(
      `${'-e4wJMiURO-i3gr436TgsQ'}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString('base64');

    myClass.signature = signature;

    res.status(200).send(myClass);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getZoomMeetingSignature;
