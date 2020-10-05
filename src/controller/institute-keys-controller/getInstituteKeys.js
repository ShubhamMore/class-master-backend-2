const InstituteKeys = require('../../models/institute-keys.model');
const errorHandler = require('../../handler/error.handler');

const getInstituteKeys = async (req, res) => {
  try {
    const instituteKeys = await InstituteKeys.findOne({ imsMasterId: req.user.imsMasterId });

    res.status(200).send(instituteKeys);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = getInstituteKeys;
