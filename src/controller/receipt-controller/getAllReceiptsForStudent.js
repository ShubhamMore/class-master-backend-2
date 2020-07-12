const Receipt = require('../../models/receipt.model');
const errorHandler = require('../../handler/error.handler');

const getAllReceiptsForStudent = async (req, res) => {
  try {
    const receipt = await Receipt.find({
      student: req.body.student,
      status: '1',
    });
    res.status(200).send(receipt);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllReceiptsForStudent;
