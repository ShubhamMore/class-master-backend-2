const Razorpay = require('razorpay');
const Branch = require('../../models/branch.model');
const InstituteOrder = require('../../models/institute-order.model');
const InstitutePaymentReceipt = require('../../models/institute-payment-receipt.model');
const StudentCourseInstallment = require('../../models/student-course-installment.model');
const mongoose = require('mongoose');
const errorHandler = require('../../handler/error.handler');

const getRazorPayInstance = (RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET) => {
  const instance = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET,
  });

  return instance;
};

const generateInstituteOrder = async (req, res) => {
  try {
    const razorPayKeys = await Branch.aggregate([
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
          accessKey: '$instituteKeys.paymentGatewayKeys',
        },
      },
    ]);

    if (!razorPayKeys.accessKey && !razorPayKeys.secretKey) {
      throw new Error('Payment Gateway Not Found');
    }

    studentCourseInstallment = await StudentCourseInstallment.findOne(
      { _id: mongoose.Types.ObjectId(req.body.studentInstallment) },
      {
        installments: {
          $elemMatch: { _id: mongoose.Types.ObjectId(req.body.installment) },
        },
      }
    );

    if (studentCourseInstallment.installments.length === 0) {
      throw new Error('Installment Not Found');
    }

    courseInstallment = studentCourseInstallment.installments[0];

    delete req.body.branch;

    const receiptData = { ...req.body };
    receiptData.amount = courseInstallment.installmentAmount;

    const instance = getRazorPayInstance(razorPayKeys.accessKey, razorPayKeys.secretKey);

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
