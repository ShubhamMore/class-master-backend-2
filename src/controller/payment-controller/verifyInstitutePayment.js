const Branch = require('../../models/branch.model');
const InstituteOrder = require('../../models/institute-order.model');
const InstitutePaymentReceipt = require('../../models/institute-payment-receipt.model');

const mongoose = require('mongoose');
const crypto = require('crypto');

const verifyInstitutePayment = async (req, res) => {
  try {
    const instituteKeys = await Branch.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.branch),
        },
      },
      {
        $project: {
          parentUser: 1,
        },
      },
      {
        $lookup: {
          from: 'institutekeys',
          localField: 'parentUser',
          foreignField: 'imsMasterId',
          as: 'keys',
        },
      },
      {
        $addFields: {
          instituteKeys: { $arrayElemAt: ['$keys', 0] },
        },
      },
      {
        $project: {
          _id: 0,
          paymentGatewayKeys: '$instituteKeys.paymentGatewayKeys',
        },
      },
    ]);

    if (instituteKeys.length === 0) {
      throw new Error('Payment Gateway Not Found');
    }

    const razorPayKeys = instituteKeys[0].paymentGatewayKeys;

    if (!razorPayKeys.accessKey && !razorPayKeys.secretKey) {
      throw new Error('Payment Gateway Not Found');
    }

    const hmac = crypto.createHmac('sha256', razorPayKeys.secretKey);

    const payment = req.body.payment;
    const institutePaymentReceipt = req.body.receipt;

    hmac.update(payment.razorpay_order_id + '|' + payment.razorpay_payment_id);
    let generatedSignature = hmac.digest('hex');

    if (generatedSignature == payment.razorpay_signature) {
      res
        .status(200)
        .send({ orderId: institutePaymentReceipt.orderId, receiptId: institutePaymentReceipt._id });

      await InstitutePaymentReceipt.findByIdAndUpdate(institutePaymentReceipt._id, {
        status: true,
      });

      const order = await InstituteOrder.findById(institutePaymentReceipt.orderId);
      order.amount_paid = order.amount;
      order.amount_due = '0';
      await order.save();
    } else {
      throw new Error('Payment Verification Failed');
    }
  } catch (e) {
    res.status(400).send(e + '');
  }
};

module.exports = verifyInstitutePayment;
