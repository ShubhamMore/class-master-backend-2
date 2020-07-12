const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const activateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(req.body._id, req.body);
    if (!branch) {
      throw new Error('Branch Updation Failed');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = activateBranch;
