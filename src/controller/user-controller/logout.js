const errorHandler = require('../../handler/error.handler');
const User = require('../../models/user.model');
const UserSocket = require('../../socket/user-socket');

const logout = async (req, res) => {
  try {
    const user = await User.findOne({ imsMasterId: req.user.imsMasterId });

    if (!user) {
      throw new Error('User Not Found');
    }

    user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await user.save();

    UserSocket.deleteSocket(req.user.imsMasterId);

    res.send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = logout;
