const Branch = require('../../models/branch.model');

const errorHandler = require('../../handler/error.handler');

const getInstituteBranches = async (req, res) => {
  try {
    const branches = await Branch.find({ parentUser: req.body.institute });

    res.status(200).send(branches);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstituteBranches;
