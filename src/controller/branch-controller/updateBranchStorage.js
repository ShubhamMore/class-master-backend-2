const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const updateBranchStorage = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.body.id, {
      $inc: { 'storageDetails.totalStorageAssigned': req.body.storageSize },
    });
    if (!branch) {
      throw new Error('No Branch Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateBranchStorage;
