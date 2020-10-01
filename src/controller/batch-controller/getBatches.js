const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const getBatchesByCourse = async (req, res) => {
  try {
    const searchQuery = {
      branch: req.body.branch,
    };

    if (req.body.category && req.body.category !== '') {
      searchQuery.category = req.body.category;
    }

    if (req.body.course && req.body.course !== '') {
      searchQuery.course = req.body.course;
    }

    const batches = await Batch.find(searchQuery);

    res.status(200).send(batches);
  } catch (e) {
    errorHandler(err, 400, res);
  }
};

module.exports = getBatchesByCourse;
