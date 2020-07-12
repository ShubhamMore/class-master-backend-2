const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.body._id);
    if (!branch) {
      throw new Error('Branch Deletion Failed');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteBranch;
