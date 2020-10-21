const Razorpay = require('razorpay');
const InstituteOrder = require('../../models/institute-order.model');
const InstitutePaymentReceipt = require('../../models/institute-payment-receipt.model');
const errorHandler = require('../../handler/error.handler');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const generateInstituteOrder = async (req, res) => {
  try {
    const receiptData = req.body;

    const gstCalculatedAmount = req.body.amount;
    receiptData.amount = gstCalculatedAmount;

    const paymentReceipt = new InstitutePaymentReceipt(receiptData);

    const options = {
      amount: +paymentReceipt.amount * 100, // amount in the smallest currency unit
      currency: 'INR',
      receipt: `order_rcptid_${paymentReceipt._id}`,
      payment_capture: '0',
    };

    instance.orders.create(options, async (err, order) => {
      if (err) {
        throw new Error(err);
      }

      const orderDetails = {
        order_id: order.id,
        entity: order.entity,
        amount: order.amount.toString(),
        amount_paid: order.amount_paid.toString(),
        amount_due: order.amount_due.toString(),
        currency: order.currency,
        receipt: order.receipt,
        offer_id: order.offer_id,
        status: order.status,
        attempts: order.attempts.toString(),
        notes: order.notes,
        created_at: order.created_at,
      };

      const generatedInstituteOrder = new InstituteOrder(orderDetails);

      paymentReceipt.orderId = generatedInstituteOrder._id;

      res.status(200).send({ paymentReceipt, order });

      await generatedInstituteOrder.save();
      await paymentReceipt.save();
    });
  } catch (e) {
    e;
    errorHandler(e, 400, res);
  }
};

module.exports = generateInstituteOrder;