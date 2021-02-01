const BranchSMS = require('../../models/branch-sms.model');
const SMSPackage = require('../../models/sms-package.model');
const errorHandler = require('../../handler/error.handler');

const updateBranchSMS = async (req, res) => {
  try {
    const smsPackage = await SMSPackage.findById(req.body.smsPackage);

    const branchSMS = await BranchSMS.findOneAndUpdate(
      { branch: req.body.branch },
      {
        $inc: { smsCount: +smsPackage.smsCount },
      }
    );

    if (!branchSMS) {
      throw new Error('No Branch SMS Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateBranchSMS;
