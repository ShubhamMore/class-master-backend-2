const Staff = require('../../models/staff.model');
const findBranchName = require('../../functions/findBranchName');
const findCourseType = require('../../functions/findCourseTypeValue');
const errorHandler = require('../../handler/error.handler');

const getStaffProfile = async (req, res) => {
  try {
    const staff = await Staff.findById(req.body._id);

    staff.courseTypes.forEach(async (courseType, i) => {
      staff.courseTypes[i] = await findCourseType(staff.branch, courseType);
    });

    staff.branch = await findBranchName(staff.branch);

    res.status(200).send(staff);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStaffProfile;
