const SMSPackage = require('../../models/sms-package.model');
const errorHandler = require('../../handler/error.handler');

const deleteSMSPackage = async (req, res) => {
  try {
    const smsPackage = await SMSPackage.findByIdAndDelete(req.body.id);

    if (!smsPackage) {
      throw new Error('SMS Package Not Found');
    }

    res.status(200).send(smsPackage);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteSMSPackage;
