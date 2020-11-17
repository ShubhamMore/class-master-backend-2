const Notification = require('../models/notification.model');
const UserSockets = require('../socket/user-socket');

const sendNotification = async (title, message, receiverId) => {
  try {
    const notification = new Notification({
      imsMasterId: receiverId,
      title: title,
      message: message,
      date: new Date().getTime(),
      status: false,
    });

    await notification.save();

    const receiver = UserSockets.getSocket(receiverId);
    if (receiver) {
      receiver.emit('notify', notification);
    }

    return;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = sendNotification;
