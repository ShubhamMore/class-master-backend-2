const errorHandler = require('../../handler/error.handler');

const getBranchDashboardForEmployee = async (req, res) => {
  try {
    res.send([]);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchDashboardForEmployee;
