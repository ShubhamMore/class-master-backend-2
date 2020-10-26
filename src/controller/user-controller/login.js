const User = require('../../models/user.model');
const Student = require('../../models/student.model');
const Employee = require('../../models/employee.model');
const Institute = require('../../models/institute.model');

const errorHandler = require('../../handler/error.handler');

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);

    if (!user.status) {
      throw new Error('This user is Blocked by Admin');
    }

    const token = await user.generateAuthToken();
    let _id = user._id;

    if (user.userRole == 'institute') {
      const institute = await Institute.findOne({ email: user.email });
      _id = institute._id;
    } else if (user.userRole == 'student') {
      const student = await Student.findOne({ email: user.email });
      _id = student._id;
    } else if (user.userRole == 'employee') {
      const staff = await Employee.findOne({ email: user.email });
      _id = staff._id;
    }

    const data = {
      _id: _id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      userRole: user.userRole,
      imsMasterId: user.imsMasterId,
      token,
      expiresIn: 3600,
    };

    res.send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = login;
