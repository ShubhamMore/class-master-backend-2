const InstituteKeys = require('../../models/institute-keys.model');
const errorHandler = require('../../handler/error.handler');

const saveInstitutePaymentGatewayKeys = async (req, res) => {
  try {
    const instituteKeys = await InstituteKeys.findOneAndUpdate(
      { imsMasterId: req.user.imsMasterId },
      { paymentGatewayKeys: req.body.keys },
      { upsert: true }
    );

    res.status(200).send(instituteKeys);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = saveInstitutePaymentGatewayKeys;
