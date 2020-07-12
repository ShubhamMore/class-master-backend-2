const Staff = require('../../models/staff.model');
const errorHandler = require('../../handler/error.handler');

const deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.body._id);
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteStaff;
