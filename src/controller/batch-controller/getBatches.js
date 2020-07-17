const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const getBatchesByCourse = async (req, res) => {
  try {
    const batches = await Batch.find({
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
    });
    res.status(200).send(batches);
  } catch (e) {
    errorHandler(err, 400, res);
  }
};

module.exports = getBatchesByCourse;
