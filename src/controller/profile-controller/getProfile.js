const Institute = require('../../models/institute.model');
const Employee = require('../../models/employee.model');
const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const getProfile = async (req, res) => {
  try {
    let profile = null;
    if (req.user.userRole === 'institute') {
      profile = await Institute.findOne({ classMasterId: req.user.classMasterId });
    } else if (req.user.userRole === 'employee') {
      profile = await Employee.findOne({ classMasterId: req.user.classMasterId });
    } else if (req.user.userRole === 'student') {
      profile = await Student.findOne({ classMasterId: req.user.classMasterId });
    } else {
      throw new Error('Invalid User Role');
    }

    if (!profile) {
      throw new Error('User Profile Not Found');
    }

    res.status(200).send(profile);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getProfile;
