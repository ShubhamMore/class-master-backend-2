const mongoose = require('mongoose');
const instituteKeysSchema = new mongoose.Schema({
  imsMasterId: {
    type: String,
    unique: true,
    required: true,
  },
  onlineClassesKeys: {
    accessKey: {
      type: String,
      required: true,
    },
    secretKey: {
      type: String,
      required: true,
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
  },
  paymentGatewayKeys: {
    accessKey: {
      type: String,
      required: true,
    },
    secretKey: {
      type: String,
      required: true,
    },
  },
});

instituteKeysSchema.methods.toJSON = function () {
  const instituteKeys = this;
  const instituteKeysObject = instituteKeys.toObject();

  delete instituteKeysObject.code;
  delete instituteKeysObject.__v;

  return instituteKeysObject;
};

const InstituteKeys = mongoose.model('InstituteKeys', instituteKeysSchema);

module.exports = InstituteKeys;