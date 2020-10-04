const mongoose = require('mongoose');

// onlineClass registration schema
const onlineClassSchema = mongoose.Schema({
  topic: {
    type: String,
    require: true,
  },
  duration: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  agenda: {
    type: String,
    require: true,
  },
  meetingId: {
    type: String,
    require: true,
  },
  joinUrl: {
    type: String,
    require: true,
  },
  startUrl: {
    type: String,
    require: true,
  },
  startTime: {
    type: String,
    require: true,
  },
  instituteId: {
    type: String,
    require: true,
  },
  batchId: {
    type: String,
    require: true,
  },
  courseId: {
    type: String,
    require: true,
  },
  topic: {
    type: String,
    require: true,
  },
  hostId: {
    type: String,
    require: true,
  },
  hostEmail: {
    type: String,
    require: true,
  },
  hostName: {
    type: String,
    require: true,
  },
});

onlineClassSchema.methods.toJSON = function () {
  const onlineClass = this;
  const onlineClassObject = onlineClass.toObject();

  delete onlineClassObject.__v;

  return onlineClassObject;
};

const OnlineClass = mongoose.model('OnlineClass', onlineClassSchema);
module.exports = OnlineClass;
