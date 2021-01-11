const InstituteKeys = require('../../models/institute-keys.model');
const errorHandler = require('../../handler/error.handler');

const saveInstituteZoomKeys = async (req, res) => {
  try {
    const instituteKeys = await InstituteKeys.findOneAndUpdate(
      { imsMasterId: req.user.imsMasterId },

      {
        $set: {
          'onlineClassesKeys.accessKey': req.body.accessKey,
          'onlineClassesKeys.secretKey': req.body.secretKey,
        },
      },
      { upsert: true }
    );

    res.status(200).send(instituteKeys);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = saveInstituteZoomKeys;
