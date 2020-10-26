const Branch = require('../../models/branch.model');

const errorHandler = require('../../handler/error.handler');

const getInstituteBranch = async (req, res) => {
  try {
    const branch = Branch.findById(req.body.branch);

    if (!branch) {
      throw new Error('Branch Not Found');
    }

    res.status(200).send(branch);

    res.send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstituteBranch;
