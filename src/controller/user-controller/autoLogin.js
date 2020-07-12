const errorHandler = require('../../handler/error.handler');

const autoLogin = async (req, res) => {
  try {
    res.send({ authenticated: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = autoLogin;
