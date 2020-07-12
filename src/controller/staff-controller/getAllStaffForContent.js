const Staff = require('../../models/staff.model');
const errorHandler = require('../../handler/error.handler');

const getAllStaffForContent = async (req, res) => {
  try {
    const staff = await Staff.find(
      {
        status: '1',
      },
      { _id: 0, name: 1, email: 1, phone: 1, qulification: 1, description: 1 }
    );

    res.status(200).send(staff);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllStaffForContent;
