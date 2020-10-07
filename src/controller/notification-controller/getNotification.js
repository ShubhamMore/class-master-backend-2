const Notification = require('../../models/notification.model');
const errorHandler = require('../../handler/error.handler');

const getNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.body._id);
    if (!notification) {
      throw new Error('No notification Found');
    }

    res.status(200).send(notification);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getNotification;
