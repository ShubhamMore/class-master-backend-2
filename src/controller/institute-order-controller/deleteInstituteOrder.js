const InstituteOrder = require('../../models/institute-order.model');
const InstitutePaymentReceipt = require('../../models/institute-payment-receipt.model');
const errorHandler = require('../../handler/error.handler');

const deleteInstituteOrder = async (req, res) => {
  try {
    req.body;
    const paymentReceipt = await InstitutePaymentReceipt.findByIdAndDelete(req.body.id);

    if (!paymentReceipt) {
      throw new Error('Payment Receipt Not Found');
    }

    await Order.findByIdAndDelete(paymentReceipt.orderId);
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteInstituteOrder;
