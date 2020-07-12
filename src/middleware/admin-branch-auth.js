const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const adminBranchAuth = async (req, res, next) => {
  try {
    if (req.user.userType === 'admin' || req.user.userType === 'branch') {
      next();
    } else {
      throw new Error();
    }
  } catch (e) {
    res.status(401).send({ error: 'Invalid Access.' });
  }
};

module.exports = adminBranchAuth;
