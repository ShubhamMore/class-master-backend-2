const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const getBatchesByCourse = async (req, res) => {
  try {
    const batches = await Batch.find({
      course: req.body.course,
    });
    res.status(200).send(batches);
  } catch (e) {
    errorHandler(err, 400, res);
  }
};

module.exports = getBatchesByCourse;
