const InstituteKeys = require('../../models/institute-keys.model');
const CryptoJS = require('crypto-js');
const errorHandler = require('../../handler/error.handler');

const getZoomAuthLink = async (req, res, next) => {
  try {
    const zoomCredentials = await InstituteKeys.findOne(
      {
        imsMasterId: req.user.imsMasterId,
      },
      { onlineClassesKeys: 1 }
    );

    const encryptedImsMasterId = CryptoJS.AES.encrypt(
      req.user.imsMasterId,
      process.env.AESSecretKey
    ).toString();

    const redirectURL =
      process.env.ZOOM_REDIRECT_URL +
      '/generateZoomAuthToken?instituteImsId=' +
      encryptedImsMasterId;

    const authLink =
      'https://zoom.us/oauth/authorize?response_type=code&client_id=' +
      zoomCredentials.onlineClassesKeys.accessKey +
      '&redirect_uri=' +
      redirectURL;

    res.status(200).send({ authLink });
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getZoomAuthLink;
