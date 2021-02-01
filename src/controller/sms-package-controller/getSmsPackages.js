const SMSPackage = require('../../models/sms-package.model');
const errorHandler = require('../../handler/error.handler');

const getSMSPackages = async (req, res) => {
  try {
    let smsPackages = [];

    if (req.user.userRole === 'admin') {
      smsPackages = await SMSPackage.find();
    } else {
      smsPackages = await SMSPackage.find({ status: true });
    }

    res.status(200).send(smsPackages);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getSMSPackages;
