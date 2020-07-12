const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const newBatch = async (req, res) => {
  try {
    const batch = new Batch(req.body);
    await batch.save();
    const data = {
      success: true,
    };
    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newBatch;
