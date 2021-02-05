const SMSPackage = require('../../models/sms-package.model');
const errorHandler = require('../../handler/error.handler');

const newSmsPackage = async (req, res) => {
  try {
    const smsPackage = await SMSPackage.findByIdAndUpdate(req.body._id, req.body);

    if (!smsPackage) {
      throw new Error('SMS Package Not Found');
    }

    res.status(200).send(smsPackage);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newSmsPackage;
