const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const changeBatchStatus = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    });
    if (!batch) {
      throw new Error('Status Updation Failed, No Batch Found');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(err, 400, res);
  }
};

module.exports = changeBatchStatus;
