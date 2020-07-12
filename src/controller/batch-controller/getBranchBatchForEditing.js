const Batch = require('../../models/batch.model');
const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getBranchBatchForEditing = async (req, res) => {
  try {
    const branch = await Branch.findById(req.body.branch);
    if (!branch) {
      throw new Error('No Branch Found');
    }

    const batch = await Batch.findById(req.body._id);
    if (!batch) {
      throw new Error('No batch Found');
    }
    res.status(200).send(batch);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchBatchForEditing;
