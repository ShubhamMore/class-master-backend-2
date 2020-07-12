const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const adminBranchStaffAuth = async (req, res, next) => {
  try {
    if (
      req.user.userType === 'admin' ||
      req.user.userType === 'branch' ||
      req.user.userType === 'staff'
    ) {
      next();
    } else {
      throw new Error();
    }
  } catch (e) {
    res.status(401).send({ error: 'Invalid Access.' });
  }
};

module.exports = adminBranchStaffAuth;
