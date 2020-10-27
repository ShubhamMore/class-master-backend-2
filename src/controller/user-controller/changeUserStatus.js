const User = require('../../models/user.model');

const errorHandler = require('../../handler/error.handler');

const changeUserStatus = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { imsMasterId: req.body.user },
      { status: req.body.status, tokens: [] }
    );

    if (!user) {
      throw new Error('User Not Found');
    }

    res.send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeUserStatus;
