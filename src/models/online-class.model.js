const mongoose = require('mongoose');

// onlineClass registration schema
const onlineClassSchema = mongoose.Schema({
  schedule: {
    type: String,
    require: true,
    unique: true,
  },
  branch: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  batch: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  topic: {
    type: String,
    require: true,
  },
  teacher: {
    type: String,
    require: true,
  },
  meetingId: {
    type: String,
    require: true,
  },
  password: {
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
  generatedOn: {
    type: String, // admin, institute
    require: true,
  },
  duration: {
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
