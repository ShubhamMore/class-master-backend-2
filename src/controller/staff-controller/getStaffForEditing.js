const Staff = require('../../models/staff.model');
const errorHandler = require('../../handler/error.handler');

const getStaffForEditing = async (req, res) => {
  try {
    const staff = await Staff.findById(req.body._id);
    if (!staff) {
      throw new Error('No Staff Found');
    }

    res.status(200).send(staff);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStaffForEditing;
