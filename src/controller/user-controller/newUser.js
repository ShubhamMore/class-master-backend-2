const User = require('../../models/user.model');
const Institute = require('../../models/institute.model');
const InstituteBilling = require('../../models/institute-billing.model');
const Employee = require('../../models/employee.model');
const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');
const getClassMasterId = require('../../functions/getClassMasterIds');
const newUser = async (req, res) => {
  try {
    req.body.classMasterId = await getClassMasterId(req.body.userRole);

    const user = new User(req.body);

    await user.save();

    const userData = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      classMasterId: user.classMasterId,
    };

    let userRoleData = null;

    if (user.userRole === 'institute') {
      userRoleData = new Institute(userData);

      const billingDetails = {
        name: user.name,
        classMasterId: user.classMasterId,
      };
      new InstituteBilling(billingDetails).save();
    } else if (user.userRole === 'employee') {
      userRoleData = new Employee(userData);
    } else if (user.userRole === 'student') {
      userRoleData = new Student(userData);
    }

    await userRoleData.save();

    res.status(201).send({ success: true });
  } catch (e) {
    let err = '' + e;
    if (e.code == 11000) {
      err = 'User already register, Please login';
    }
    errorHandler(err, 400, res);
  }
};

module.exports = newUser;
