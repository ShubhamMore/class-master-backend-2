const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  imsMasterId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    default: new Date().getTime(),
  },
  status: {
    type: Boolean,
    default: false,
  },
});

notificationSchema.methods.toJSON = function () {
  const notification = this;
  const notificationObject = notification.toObject();

  delete notificationObject.__v;

  return notificationObject;
};

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
