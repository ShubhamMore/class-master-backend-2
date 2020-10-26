const AdminZoomKeys = require('../../models/admin-online-classes-keys.model');
const errorHandler = require('../../handler/error.handler');

const getAdminZoomKeys = async (req, res) => {
  try {
    const adminKeys = await AdminZoomKeys.findOne({ imsMasterId: req.user.imsMasterId });

    res.status(200).send(adminKeys);
  } catch (e) {
    console.log(e);
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = getAdminZoomKeys;
