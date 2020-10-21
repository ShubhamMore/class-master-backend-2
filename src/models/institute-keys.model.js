const mongoose = require('mongoose');
const instituteKeysSchema = new mongoose.Schema({
  imsMasterId: {
    type: String,
    unique: true,
    require: true,
  },
  onlineClassesKeys: {
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
  },
  paymentGatewayKeys: {
    accessKey: {
      type: String,
      require: true,
    },
    secretKey: {
      type: String,
      require: true,
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
