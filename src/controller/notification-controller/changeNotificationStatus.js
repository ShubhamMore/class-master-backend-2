const Notification = require('../../models/notification.model');
const errorHandler = require('../../handler/error.handler');

const changeNotificationStatus = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.body.id, { status: true });
    if (!notification) {
      throw new Error('No notification Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeNotificationStatus;
