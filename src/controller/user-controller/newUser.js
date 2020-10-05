const User = require('../../models/user.model');
const Institute = require('../../models/institute.model');
const Employee = require('../../models/employee.model');
const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');
const getImsMasterId = require('../../functions/getImsMasterId');
const newUser = async (req, res) => {
  try {
    req.body.imsMasterId = await getImsMasterId(req.body.userRole);
    const user = new User(req.body);
    user;
    await user.save();

    const userData = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      imsMasterId: user.imsMasterId,
    };

    let userRoleData = null;

    if (user.userRole === 'institute') {
      userRoleData = new Institute(userData);
    } else if (user.userRole === 'employee') {
      userRoleData = new Employee(userData);
    } else if (user.userRole === 'student') {
      userRoleData = new Student(userData);
    } else {
      throw new Error('Invalid User Role');
    }

    await userRoleData.save();

    res.status(201).send({ success: true });
  } catch (e) {
    let err = '' + e;
    if (e.code == 11000) {
      err = 'User already register, Please login';
    }
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = newUser;
