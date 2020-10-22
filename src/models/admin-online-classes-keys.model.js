const mongoose = require('mongoose');
const adminOnlineClassesKeysSchema = new mongoose.Schema({
  imsMasterId: {
    type: String,
    require: true,
  },
  accessKey: {
    type: String,
    require: true,
  },
  secretKey: {
    type: String,
    require: true,
  },
  accessToken: {
    type: String,
    default: null,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  expiresIn: {
    type: Number,
    default: null,
  },
});

adminOnlineClassesKeysSchema.methods.toJSON = function () {
  const adminOnlineClassesKeys = this;
  const adminOnlineClassesKeysObject = adminOnlineClassesKeys.toObject();

  delete adminOnlineClassesKeysObject.code;
  delete adminOnlineClassesKeysObject.__v;

  return adminOnlineClassesKeysObject;
};

const AdminOnlineClassesKeys = mongoose.model(
  'AdminOnlineClassesKeys',
  adminOnlineClassesKeysSchema
);

module.exports = AdminOnlineClassesKeys;
