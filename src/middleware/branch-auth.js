const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const branchAuth = async (req, res, next) => {
  try {
    if (req.user.userType !== 'branch') {
      throw new Error();
    }
    next();
  } catch (e) {
    res.status(401).send({ error: 'Invalid Access.' });
  }
};

module.exports = branchAuth;
