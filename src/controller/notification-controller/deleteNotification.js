const Notification = require('../../models/notification.model');
const errorHandler = require('../../handler/error.handler');

const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.body.id);
    if (!notification) {
      throw new Error('No notification Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteNotification;
