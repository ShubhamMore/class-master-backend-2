const errorHandler = require('../../handler/error.handler');

const logoutAll = async (req, res) => {
  try {
    const user = await User.findOne({ classMasterId: req.user.classMasterId });

    if (!user) {
      throw new Error('User Not Found');
    }
    user.tokens = [];
    await user.save();
    res.send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = logoutAll;
