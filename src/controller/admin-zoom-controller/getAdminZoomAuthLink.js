const AdminZoomKeys = require('../../models/admin-online-classes-keys.model');
const errorHandler = require('../../handler/error.handler');

const getAdminZoomAuthLink = async (req, res, next) => {
  try {
    const adminZoomKeys = await AdminZoomKeys.findOne({
      imsMasterId: req.user.imsMasterId,
    });

    const accessKey = adminZoomKeys.accessKey;

    const redirectURL = process.env.ZOOM_REDIRECT_URL + '/generateZoomAuthToken';

    const authLink =
      'https://zoom.us/oauth/authorize?response_type=code&client_id=' +
      accessKey +
      '&redirect_uri=' +
      redirectURL;

    res.status(200).send({ authLink });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAdminZoomAuthLink;
