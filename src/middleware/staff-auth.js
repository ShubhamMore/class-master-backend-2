const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const staffAuth = async (req, res, next) => {
  try {
    if (req.user.userType !== 'staff') {
      throw new Error();
    }
    next();
  } catch (e) {
    res.status(401).send({ error: 'Invalid Access.' });
  }
};

module.exports = staffAuth;
