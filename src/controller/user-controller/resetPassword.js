const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const errorHandler = require('../../handler/error.handler');

const resetPassword = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': req.body.token,
    });

    if (!user) {
      throw new Error('No user Found');
    }

    user.tokens = [];
    user.password = req.body.password;

    await user.save();

    res.send();
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = resetPassword;
