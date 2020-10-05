const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const deleteBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.body.id);
    if (!batch) {
      throw new Error('Batch Deletion Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = deleteBatch;
