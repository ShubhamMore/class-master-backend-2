const InstituteKeys = require('../../models/institute-keys.model');
const promiseRequest = require('request-promise');
const CryptoJS = require('crypto-js');
const errorHandler = require('../../handler/error.handler');

const generateZoomAuthToken = async (req, res) => {
  try {
    const bytes = CryptoJS.AES.decrypt(req.query.instituteImsId, process.env.AESSecretKey);
    const decryptedImsMasterId = bytes.toString(CryptoJS.enc.Utf8);

    const zoomCredentials = await InstituteKeys.findOne(
      {
        imsMasterId: decryptedImsMasterId,
      },
      { onlineClassesKeys: 1 }
    );

    if (!zoomCredentials) {
      throw new Error('No Zoom Credentials Found');
    }

    const redirectURL =
      process.env.ZOOM_REDIRECT_URL +
      '/generateZoomAuthToken?instituteImsId=' +
      req.query.instituteImsId;

    const options = {
      method: 'POST',
      url: 'https://zoom.us/oauth/token',
      qs: {
        grant_type: 'authorization_code',
        //The code below is a sample authorization code. Replace it with your actual authorization code while making requests.
        code: req.query.code,
        //The uri below is a sample redirect_uri. Replace it with your actual redirect_uri while making requests.
        redirect_uri: redirectURL,
      },
      headers: {
        /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
         **/
        Authorization:
          'Basic ' +
          Buffer.from(
            zoomCredentials.onlineClassesKeys.accessKey +
              ':' +
              zoomCredentials.onlineClassesKeys.secretKey
          ).toString('base64'),
      },
    };

    let response = await promiseRequest(options);

    response = JSON.parse(response);

    const currentTime = new Date().getTime() / 1000;

    const expiresIn = response.expires_in + currentTime;

    await InstituteKeys.findOneAndUpdate(
      {
        imsMasterId: decryptedImsMasterId,
      },
      {
        $set: {
          'onlineClassesKeys.accessToken': response.access_token,
          'onlineClassesKeys.refreshToken': response.refresh_token,
          'onlineClassesKeys.expiresIn': expiresIn,
        },
      },
      {
        multi: true,
      }
    );

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = generateZoomAuthToken;
