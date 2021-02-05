const BranchHistory = require('../../models/branch-history.model');

const errorHandler = require('../../handler/error.handler');

const getInstituteBranchHistory = async (req, res) => {
  try {
    const branchHistory = await BranchHistory.find({
      branch: req.body.branch,
    }).sort({ _id: -1 });

    res.status(200).send(branchHistory);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstituteBranchHistory;
