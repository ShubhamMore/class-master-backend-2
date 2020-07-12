const mongoose = require('mongoose');

const classMasterIdSchema = new mongoose.Schema({
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

classMasterIdSchema.methods.toJSON = function () {
  const classMasterId = this;
  const classMasterIdObject = classMasterId.toObject();

  delete classMasterIdObject.__v;

  return classMasterIdObject;
};

const ClassMasterId = mongoose.model('ClassMasterId', classMasterIdSchema);

module.exports = ClassMasterId;
