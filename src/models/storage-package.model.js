const mongoose = require('mongoose');
const storagePackageSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  storage: {
    type: Number,
    required: true,
  },
  validity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

storagePackageSchema.methods.toJSON = function () {
  const storagePackage = this;
  const storagePackageObject = storagePackage.toObject();

  delete storagePackageObject.__v;

  return storagePackageObject;
};

const StoragePackage = mongoose.model('StoragePackage', storagePackageSchema);

module.exports = StoragePackage;
