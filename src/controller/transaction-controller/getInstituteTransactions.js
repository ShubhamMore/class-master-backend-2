const PaymentReceipt = require('../../models/payment-receipt.model');

const errorHandler = require('../../handler/error.handler');

const getInstituteTransactions = async (req, res) => {
  try {
    const transactions = await PaymentReceipt.aggregate([
      {
        $match: {
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
          from: 'orders',
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
                amount: 1,
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

    res.status(200).send(transactions);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstituteTransactions;
