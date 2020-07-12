const User = require('../../models/user.model');
const errorHandler = require('../../handler/error.handler');

const checkUser = async (req, res) => {
  try {
    let exist = false;
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      exist = true;
    }
    res.status(201).send({ exist });
  } catch (e) {
    let err = '' + e;
    if (e.code == 11000) {
      err = 'User already register, Please login';
    }
    errorHandler(err, 400, res);
  }
};

module.exports = checkUser;
