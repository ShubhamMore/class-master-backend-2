const Branch = require('../../models/branch.model');

const errorHandler = require('../../handler/error.handler');

const getInstituteBranches = async (req, res) => {
  try {
    const institutes = Branch.find({ parentUser: req.body.institute });

    res.status(200).send(institutes);

    res.send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstituteBranches;
