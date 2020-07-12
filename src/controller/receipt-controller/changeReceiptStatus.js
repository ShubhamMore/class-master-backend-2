const Receipt = require('../../models/receipt.model');
const errorHandler = require('../../handler/error.handler');

const changeReceiptStatus = async (req, res) => {
  try {
    const receipt = await Receipt.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    });

    if (!receipt) {
      throw new Error('Receipt Status Updation Failed');
    }

    res.status(200).send(receipt);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeReceiptStatus;
