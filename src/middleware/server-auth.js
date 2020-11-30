const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const serverAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (token !== process.env.SERVER_TOKEN) {
      throw new Error('User Not Found');
    }

    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = serverAuth;
