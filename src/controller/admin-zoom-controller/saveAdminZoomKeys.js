const AdminZoomKeys = require('../../models/admin-online-classes-keys.model');
const errorHandler = require('../../handler/error.handler');

const saveAdminZoomKeys = async (req, res) => {
  try {
    const adminKeys = await AdminZoomKeys.findOneAndUpdate(
      { imsMasterId: req.user.imsMasterId },

      {
        $set: {
          accessKey: req.body.accessKey,
          secretKey: req.body.secretKey,
        },
      },
      { upsert: true }
    );

    res.status(200).send(adminKeys);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = saveAdminZoomKeys;
