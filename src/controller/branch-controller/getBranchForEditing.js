const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getBranchForEditing = async (req, res) => {
  try {
    const branch = await Branch.findById(req.body.id);

    if (!branch) {
      throw new Error('No Branch Found');
    }

    res.status(200).send(branch);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchForEditing;
