const History = require('../../models/history.model');
const constructHistory = require('../../functions/constructHistory');
const errorHandler = require('../../handler/error.handler');

const getStudentHistory = async (req, res) => {
  try {
    const history = await History.findOne({
      student: req.body.student,
    });
    if (!history) {
      throw new Error('No Student History Found');
    }

    const studentHistory = await constructHistory(history.branches);

    res.status(200).send({ history: studentHistory });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentHistory;
