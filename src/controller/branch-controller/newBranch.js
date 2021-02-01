const Branch = require('../../models/branch.model');
const BranchStorage = require('../../models/branch-storage.model');
const BranchSMS = require('../../models/branch-sms.model');
const InstituteBilling = require('../../models/institute-billing.model');

const errorHandler = require('../../handler/error.handler');

const newBranch = async (req, res) => {
  try {
    const branchData = req.body;

    branchData.parentUser = req.user.imsMasterId;

    const branch = new Branch(branchData);

    const branchStorage = new BranchStorage({ branch: branch._id });
    const branchSMS = new BranchSMS({ branch: branch._id });

    const billingDetails = {
      branch: branch._id,
      name: branch.basicDetails.branchName,
      address: `${branch.address.address1}, ${
        branch.address.address2 ? branch.address.address2 + ',' : ''
      } ${branch.address.city} - ${branch.address.pinCode}, ${branch.address.state}`,
    };

    const instituteBilling = new InstituteBilling(billingDetails);

    const saveBranch = branch.save();
    const saveBranchStorage = branchStorage.save();
    const saveBranchSMS = branchSMS.save();
    const saveInstituteBilling = instituteBilling.save();

    Promise.all([saveBranch, saveBranchStorage, saveBranchSMS, saveInstituteBilling])
      .then((resData) => {
        res.status(201).send({ branchId: branch._id });
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newBranch;
