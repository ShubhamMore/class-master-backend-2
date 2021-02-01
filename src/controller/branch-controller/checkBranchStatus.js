const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const checkBranchStatus = async (req, res) => {
  try {
    branch = await Branch.findById(req.body.id);

    if (!branch) {
      throw new Error('No Branch Found');
    }

    res.status(200).send({ activated: branch.status });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = checkBranchStatus;
