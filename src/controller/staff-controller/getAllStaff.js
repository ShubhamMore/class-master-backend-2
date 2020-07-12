const Staff = require('../../models/staff.model');
const errorHandler = require('../../handler/error.handler');

const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find({
      branch: req.body.branch,
      courseTypes: { $all: [{ _id: req.body.courseType }] },
    });
    res.status(200).send(staff);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllStaff;
