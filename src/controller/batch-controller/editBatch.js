const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const editBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.body._id, req.body);
    if (!batch) {
      throw new Error('Batch Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(err, 400, res);
  }
};

module.exports = editBatch;
