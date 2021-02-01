const BranchSMS = require('../../models/branch-sms.model');
const errorHandler = require('../../handler/error.handler');

const getBranchSMS = async (req, res) => {
  try {
    const branchSMS = await BranchSMS.findOne({ branch: req.body.branch });

    if (!branchSMS) {
      throw new Error('No Branch SMS Found');
    }

    res.status(200).send(branchSMS);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchSMS;
