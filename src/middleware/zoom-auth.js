const Branch = require('../models/branch.model');
const InstituteKeys = require('../models/institute-keys.model');
const OnlineClass = require('../models/online-class.model');
const AdminKeys = require('../models/admin-online-classes-keys.model');
const promiseRequest = require('request-promise');
const errorHandler = require('../handler/error.handler');

const zoomAuth = async (req, res, next) => {
  try {
    let imsMasterId = '';

    let accountType = null;

    if (req.body.type === 'delete' || req.body.type === 'edit') {
      const onlineClass = OnlineClass.findOne(
        {
          schedule: req.body.scheduleId,
        },
        { accountType: 1 }
      );

      if (onlineClass && onlineClass.accountType) {
        accountType = onlineClass.accountType;
      }
    }

    delete req.body.type;

    if (req.user.userRole == 'institute') {
      imsMasterId = req.user.imsMasterId;
    } else if (req.user.userRole == 'employee' || req.user.userRole == 'student') {
      const branch = await Branch.findById(req.body.branch);
      imsMasterId = branch.parentUser;
    }

    if (!imsMasterId) {
      throw new Error('Institute Not Found');
    }

    const zoomKeys = {};

    let adminZoomCredentials = null;

    const instituteKeys = await InstituteKeys.findOne({
      imsMasterId,
    });

    if (
      instituteKeys &&
      instituteKeys.onlineClassesKeys.refreshToken &&
      (!accountType || accountType === 'institute')
    ) {
      zoomKeys.accessKey = instituteKeys.onlineClassesKeys.accessKey;
      zoomKeys.secretKey = instituteKeys.onlineClassesKeys.secretKey;
      zoomKeys.expiresIn = instituteKeys.onlineClassesKeys.expiresIn;
      zoomKeys.accessToken = instituteKeys.onlineClassesKeys.accessToken;
      zoomKeys.refreshToken = instituteKeys.onlineClassesKeys.refreshToken;
      zoomKeys.accountType = 'institute';
    } else {
      adminZoomCredentials = await AdminKeys.findOne();

      if (!adminZoomCredentials) {
        throw new Error('Invalid Zoom Credentials');
      }

      zoomKeys.accessKey = adminZoomCredentials.accessKey;
      zoomKeys.secretKey = adminZoomCredentials.secretKey;
      zoomKeys.expiresIn = adminZoomCredentials.expiresIn;
      zoomKeys.accessToken = adminZoomCredentials.accessToken;
      zoomKeys.refreshToken = adminZoomCredentials.refreshToken;
      zoomKeys.accountType = 'admin';
    }

    if (!zoomKeys.refreshToken) {
      throw new Error('Invalid Zoom Access Token');
    }

    const currentTimeStamp = new Date().getTime();

    if (currentTimeStamp > zoomKeys.expiresIn) {
      const options = {
        method: 'POST',
        url: 'https://zoom.us/oauth/token',
        qs: {
          grant_type: 'refresh_token',
          refresh_token: zoomKeys.refreshToken,
        },
        headers: {
          /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
           **/
          Authorization:
            'Basic ' +
            Buffer.from(zoomKeys.accessKey + ':' + zoomKeys.secretKey).toString('base64'),
        },
      };

      let response = await promiseRequest(options);

      response = JSON.parse(response);

      const currentTime = new Date().getTime();

      const expiresIn = response.expires_in * 1000 + currentTime;

      if (adminZoomCredentials) {
        await AdminKeys.findOneAndUpdate(
          {
            imsMasterId: adminZoomCredentials.imsMasterId,
          },
          {
            $set: {
              accessToken: response.access_token,
              refreshToken: response.refresh_token,
              expiresIn: expiresIn,
            },
          },
          {
            multi: true,
          }
        );
      } else {
        await InstituteKeys.findOneAndUpdate(
          {
            imsMasterId: imsMasterId,
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
      }

      zoomKeys.accessToken = response.access_token;
      zoomKeys.refreshToken = response.refresh_token;
      zoomKeys.expiresIn = expiresIn;
    }

    req.zoomCredentials = zoomKeys;

    next();
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = zoomAuth;
