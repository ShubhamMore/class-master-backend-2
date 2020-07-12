const Staff = require('../../models/staff.model');
const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getBranchStaffForEditing = async (req, res) => {
  try {
    const branches = await Branch.find({ _id: req.body.branch });
    if (branches.length < 1) {
      throw new Error('No Branch Found');
    }

    const staff = await Staff.findById(req.body._id);
    if (!staff) {
      throw new Error('No Staff Found');
    }

    res.status(200).send(staff);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchStaffForEditing;
