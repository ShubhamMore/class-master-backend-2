const adminAuth = async (req, res, next) => {
  try {
    if (req.user.userRole !== 'admin') {
      throw new Error();
    }
    next();
  } catch (e) {
    res.status(401).send({ error: 'Invalid Access.' });
  }
};

module.exports = adminAuth;
