const Razorpay = require('razorpay');
const Order = require('../../models/order.model');
const Coupon = require('../../models/coupon.model');
const MembershipPlan = require('../../models/membership-plan.model');
const PaymentReceipt = require('../../models/payment-receipt.model');
const errorHandler = require('../../handler/error.handler');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const generateMembershipOrder = async (req, res) => {
  try {
    const membershipPlan = await MembershipPlan.findOne({ name: req.body.packageType });

    if (!membershipPlan) {
      throw new Error('Membership Plan not Found');
    }

    const receiptData = req.body;

    let coupon = null;

    if (req.body.coupon) {
      coupon = await Coupon.findOne({ code: req.body.coupon });
    }

    let amount = membershipPlan.price;

    if (coupon) {
      let discountAmount = coupon.discountAmount;
      if (coupon.discountType === 'percentage') {
        discountAmount = (amount / 100) * coupon.discountAmount;
      }
      amount = amount - discountAmount;
    }

    receiptData.amount = +amount;

    const paymentReceipt = new PaymentReceipt(receiptData);

    const options = {
      amount: Math.round(+paymentReceipt.amount * 100), // amount in the smallest currency unit
      currency: 'INR',
      receipt: `order_rcptid_${paymentReceipt._id}`,
      payment_capture: '0',
    };

    instance.orders.create(options, async (err, order) => {
      try {
        if (err) {
          throw new Error(err.error.description);
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

        const generatedOrder = new Order(orderDetails);

        paymentReceipt.orderId = generatedOrder._id;

        res.status(200).send({ paymentReceipt, order });

        await generatedOrder.save();
        await paymentReceipt.save();
      } catch (e) {
        errorHandler(e, 400, res);
      }
    });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = generateMembershipOrder;
