const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const getBatch = async (req, res) => {
  try {
    const batch = await Batch.findById(req.body._id);
    if (!batch) {
      throw new Error('No batch Found');
    }

    res.status(200).send(batch);
  } catch (e) {
    errorHandler(err, 400, res);
  }
};

module.exports = getBatch;
