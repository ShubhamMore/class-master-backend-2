const InstituteKeys = require('../../models/institute-keys.model');
const errorHandler = require('../../handler/error.handler');

const getZoomAuthLink = async (req, res, next) => {
  try {
    const zoomCredentials = await InstituteKeys.findOne(
      {
        imsMasterId: req.user.imsMasterId,
      },
      { onlineClassesKeys: 1 }
    );

    const encryptedImsMasterId = Buffer.from(req.user.imsMasterId, 'utf8').toString('hex');

    const redirectURL = encodeURIComponent(
      process.env.ZOOM_REDIRECT_URL +
        '/generateZoomAuthToken?instituteImsId=' +
        encryptedImsMasterId
    ).toString();

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
