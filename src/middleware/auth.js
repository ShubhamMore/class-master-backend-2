const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
// const Student = require('../models/student.model');
// const Employee = require('../models/employee.model');
// const Institute = require('../models/institute.model');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });
    if (!user) {
      throw new Error('User Not Found');
    }

    // if (user.userRole == 'institute') {
    //   const institute = await Institute.findOne({ email: user.email });
    //   user._id = institute._id;
    // } else if (user.userRole == 'student') {
    //   const student = await Student.findOne({ email: user.email });
    //   user._id = student._id;
    // } else if (user.userRole == 'employee') {
    //   const employee = await Employee.findOne({ email: user.email });
    //   user._id = staff._id;
    // }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
