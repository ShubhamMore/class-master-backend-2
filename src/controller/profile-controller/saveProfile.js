const Institute = require('../../models/institute.model');
const Employee = require('../../models/employee.model');
const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const saveProfile = async (req, res) => {
  try {
    let profile = null;
    if (req.user.userRole === 'institute') {
      profile = await Institute.findOneAndUpdate({ imsMasterId: req.user.imsMasterId }, req.body);
    } else if (req.user.userRole === 'employee') {
      profile = await Employee.findOneAndUpdate({ imsMasterId: req.user.imsMasterId }, req.body);
    } else if (req.user.userRole === 'student') {
      profile = await Student.findOneAndUpdate({ imsMasterId: req.user.imsMasterId }, req.body);
    } else {
      throw new Error('Invalid User Role');
    }

    if (!profile) {
      throw new Error('User Profile Not Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveProfile;
