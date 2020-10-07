const Notification = require('../../models/notification.model');
const errorHandler = require('../../handler/error.handler');

const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ imsMasterId: req.user.imsMasterId });

    res.status(200).send(notifications);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getNotifications;
