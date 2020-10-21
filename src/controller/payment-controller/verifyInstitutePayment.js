const Order = require('../../models/order.model');
const InstitutePaymentReceipt = require('../../models/institute-payment-receipt.model');

const crypto = require('crypto');

const verifyInstitutePayment = async (req, res) => {
  try {
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);

    const payment = req.body.payment;
    const institutePaymentReceipt = req.body.receipt;

    hmac.update(payment.razorpay_order_id + '|' + payment.razorpay_payment_id);
    let generatedSignature = hmac.digest('hex');

    if (generatedSignature == payment.razorpay_signature) {
      res
        .status(200)
        .send({ orderId: institutePaymentReceipt.orderId, receiptId: institutePaymentReceipt._id });

      await InstituteinstitutePaymentReceipt.findByIdAndUpdate(institutePaymentReceipt._id, {
        success: true,
      });

      const order = await Order.findById(institutePaymentReceipt.orderId);
      order.amount_paid = order.amount;
      order.amount_due = '0';
      await order.save();
    } else {
      throw new Error('Payment Verification Failed');
    }
  } catch (e) {
    e;
    res.status(400).send(e + '');
  }
};

module.exports = verifyInstitutePayment;
