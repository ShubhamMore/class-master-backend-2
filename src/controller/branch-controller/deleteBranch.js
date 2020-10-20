const Branch = require('../../models/branch.model');
const BillingDetails = require('../../models/institute-billing.model');
const BranchStorage = require('../../models/branch-storage.model');

const errorHandler = require('../../handler/error.handler');

const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.body.id);
    if (!branch) {
      throw new Error('Branch Deletion Failed');
    }

    await BillingDetails.deleteOne({ branch: branch._id });
    await BranchStorage.deleteOne({ branch: branch._id });

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteBranch;
