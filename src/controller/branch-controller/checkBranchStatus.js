const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const checkBranchStatus = async (req, res) => {
  try {
    branch = await Branch.findById(req.body.id);

    if (!branch) {
      throw new Error('No Branch Found');
    }

    if (branch.status) {
      res.status(200).send({ activated: true });
    } else {
      res.status(200).send({ activated: false });
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = checkBranchStatus;
