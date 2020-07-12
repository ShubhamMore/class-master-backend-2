const Staff = require('../../models/staff.model');
const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const findBranchName = require('../../functions/findBranchName');

const getStaffForSalary = async (req, res) => {
  try {
    const staff = await Staff.findById(req.body._id);
    const branch = await Branch.findById(staff.branch);

    const courseTypes = new Array();

    branch.courseTypes.find((curCourseType) => {
      if (staff.courseTypes.includes(curCourseType._id)) {
        const courseTypeObj = {
          _id: curCourseType._id,
          courseType: curCourseType.courseType,
        };
        courseTypes.push(courseTypeObj);
      }
    });

    const staffMetaData = {
      branch: await findBranchName(staff.branch),
      courseTypes: courseTypes,
    };

    res.status(200).send({ staff, staffMetaData });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStaffForSalary;
