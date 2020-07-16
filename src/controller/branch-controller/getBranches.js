const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getBranches = async (req, res) => {
  try {
    if (!req.body.imsMasterId) {
      throw new Error('IMS Master Id is not provided');
    }

    const branches = await Branch.find({ parentUser: req.user.imsMasterId });
    branches;
    res.status(200).send(branches);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranches;
