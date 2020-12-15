const InstitutePaymentReceipt = require('../../models/institute-payment-receipt.model');

const mongoose = require('mongoose');

const errorHandler = require('../../handler/error.handler');

const getStudentTransaction = async (req, res) => {
  try {
    const transaction = await InstitutePaymentReceipt.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.id),
          imsMasterId: req.user.imsMasterId,
        },
      },
      {
        $addFields: {
          order: { $toObjectId: '$orderId' },
        },
      },
      {
        $lookup: {
          from: 'instituteorders',
          let: { orderId: '$order' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $cond: {
                    $eq: ['$_id', '$$orderId'],
                  },
                },
              },
            },
            {
              $project: {
                _id: 0,
                order_id: 1,
              },
            },
          ],
          as: 'orders',
        },
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: [{ $arrayElemAt: ['$orders', 0] }, '$$ROOT'] },
        },
      },
      { $project: { orders: 0, order: 0 } },
    ]);

    if (!transaction[0]) {
      throw new Error('No Transaction Found');
    }

    res.status(200).send(transaction[0]);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentTransaction;
