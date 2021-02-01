const Branch = require('../../models/branch.model');
const BillingDetails = require('../../models/institute-billing.model');
const BranchStorage = require('../../models/branch-storage.model');
const BranchSMS = require('../../models/branch-sms.model');

const errorHandler = require('../../handler/error.handler');

const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.body.id);
    if (!branch) {
      throw new Error('Branch Deletion Failed');
    }

    const deleteBillingDetails = BillingDetails.deleteOne({ branch: branch._id });
    const deleteBranchStorage = BranchStorage.deleteOne({ branch: branch._id });
    const deleteBranchSMS = BranchSMS.deleteOne({ branch: branch._id });

    try {
      Promise.all([deleteBillingDetails, deleteBranchStorage, deleteBranchSMS])
        .then((resData) => {
          res.status(200).send({ success: true });
        })
        .catch((e) => {
          throw new Error(e);
        });
    } catch (e) {
      throw new Error(e);
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteBranch;
