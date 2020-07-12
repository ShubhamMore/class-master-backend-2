const Staff = require('../../models/staff.model');
const errorHandler = require('../../handler/error.handler');

const editStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.body._id, req.body);
    if (!staff) {
      throw new Error('No Staff Found, Updation Failed');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editStaff;
