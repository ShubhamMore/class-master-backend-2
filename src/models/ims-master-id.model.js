const mongoose = require('mongoose');

const imsMasterIdSchema = new mongoose.Schema({
  institute: {
    type: Number,
    default: 0,
  },
  employee: {
    type: Number,
    default: 0,
  },
  student: {
    type: Number,
    default: 0,
  },
});

imsMasterIdSchema.methods.toJSON = function () {
  const imsMasterId = this;
  const imsMasterIdObject = imsMasterId.toObject();

  delete imsMasterIdObject.__v;

  return imsMasterIdObject;
};

const ImsMasterId = mongoose.model('ImsMasterId', imsMasterIdSchema);

module.exports = ImsMasterId;
