const Notification = require('../../models/notification.model');
const UserSockets = require('../../socket/user-socket');
const errorHandler = require('../../handler/error.handler');

const sendNotification = async (req, res) => {
  try {
    const notification = new Notification({
      imsMasterId: req.body.receiverId,
      title: req.body.title,
      message: req.body.message,
      date: new Date().getTime(),
      status: false,
    });

    await notification.save();

    const receiver = UserSockets.getSocket(req.body.receiverId);
    if (receiver) {
      receiver.emit('notify', notification);
    }

    res.status(200).send(notification);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = sendNotification;
