const Branch = require('../models/branch.model');
const InstituteKeys = require('../models/institute-keys.model');
const promiseRequest = require('request-promise');
const errorHandler = require('../handler/error.handler');

const zoomAuth = async (req, res, next) => {
  try {
    let imsMasterId = '';

    if (req.user.userRole == 'institute') {
      imsMasterId = req.user.imsMasterId;
    } else if (req.user.userRole == 'employee' || req.user.userRole == 'student') {
      const branch = await Branch.findById(req.body.branch);
      imsMasterId = branch.parentUser;
    }

    if (!imsMasterId) {
      throw new Error('Institute Not Found');
    }

    const instituteKeys = await InstituteKeys.findOne(
      {
        imsMasterId,
      },
      { onlineCLassesKeys: 1 }
    );

    if (!instituteKeys) {
      throw new Error('Invalid Zoom Credentials');
    }

    const currentTimeStamp = new Date().getTime() / 1000;

    if (currentTimeStamp > instituteKeys.onlineCLassesKeys.expiresIn) {
      const options = {
        method: 'POST',
        url: 'https://zoom.us/oauth/token',
        qs: {
          grant_type: 'refresh_token',
          refresh_token: instituteKeys.onlineCLassesKeys.refreshToken,
        },
        headers: {
          /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
           **/
          Authorization:
            'Basic ' +
            Buffer.from(
              instituteKeys.onlineCLassesKeys.accessKey +
                ':' +
                instituteKeys.onlineCLassesKeys.secretKey
            ).toString('base64'),
        },
      };

      let response = await promiseRequest(options);

      response = JSON.parse(responseBody);

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

      instituteKeys.onlineCLassesKeys.accessToken = response.access_token;
      instituteKeys.onlineCLassesKeys.refreshToken = response.refresh_token;
      instituteKeys.onlineCLassesKeys.expiresIn = expiresIn;
    }

    req.zoomCredentials = instituteKeys;

    next();
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = zoomAuth;
