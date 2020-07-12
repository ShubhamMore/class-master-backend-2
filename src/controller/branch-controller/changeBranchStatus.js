const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const changeBranchStatus = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    });
    if (!branch) {
      throw new Error('Status Change Failed');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeBranchStatus;
