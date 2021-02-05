const SMSPackage = require('../../models/sms-package.model');
const errorHandler = require('../../handler/error.handler');

const newSmsPackage = async (req, res) => {
  try {
    const newSMSPackage = new SMSPackage(req.body);

    await newSMSPackage.save();

    res.status(200).send(newSMSPackage);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newSmsPackage;
