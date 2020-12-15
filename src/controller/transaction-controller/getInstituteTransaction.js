const PaymentReceipt = require('../../models/payment-receipt.model');

const mongoose = require('mongoose');

const errorHandler = require('../../handler/error.handler');

const getInstituteTransaction = async (req, res) => {
  try {
    const transaction = await PaymentReceipt.aggregate([
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
                branchBasicDetails: '$basicDetails',
                branchAddress: '$address',
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

    if (!transaction[0]) {
      throw new Error('No Transaction Found');
    }

    res.status(200).send(transaction[0]);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstituteTransaction;
