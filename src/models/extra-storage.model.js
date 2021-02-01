const mongoose = require('mongoose');

const extraStorageSchema = new mongoose.Schema({
  storageSize: {
    type: Number,
    required: true,
  },
  validity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

extraStorageSchema.methods.toJSON = function () {
  const extraStorage = this;
  const extraStorageObject = extraStorage.toObject();

  delete extraStorageObject.__v;

  return extraStorageObject;
};

const ExtraStorage = mongoose.model('ExtraStorage', extraStorageSchema);

module.exports = ExtraStorage;
