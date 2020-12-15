const PaymentReceipt = require('../../models/payment-receipt.model');

const errorHandler = require('../../handler/error.handler');

const getInstituteTransactions = async (req, res) => {
  try {
    const transactions = await PaymentReceipt.aggregate([
      {
        $match: {
          // imsMasterId: req.user.imsMasterId,
          status: true,
        },
      },
      {
        $addFields: {
          order: { $toObjectId: '$orderId' },
          branchId: { $toObjectId: '$branch' },
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
                  $eq: ['$_id', '$$orderId'],
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
        $lookup: {
          from: 'branches',
          let: { branch_id: '$branchId' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$_id', '$$branch_id'],
                },
              },
            },
            {
              $project: {
                _id: 0,
                basicDetails: 1,
                address: 1,
              },
            },
          ],
          as: 'branches',
        },
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: [{ $arrayElemAt: ['$orders', 0] }, '$$ROOT'] },
        },
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: [{ $arrayElemAt: ['$branches', 0] }, '$$ROOT'] },
        },
      },
      { $project: { orders: 0, order: 0, branches: 0, branchId: 0 } },
    ]);

    res.status(200).send(transactions);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstituteTransactions;
