const PaymentReceipt = require('../../models/payment-receipt.model');

const errorHandler = require('../../handler/error.handler');

const getInstituteBranchHistory = async (req, res) => {
  try {
    const branchHistory = await PaymentReceipt.aggregate([
      {
        $match: {
          userId: req.body.user,
        },
      },
      {
        $addFields: {
          orderId: {
            $toObjectId: '$orderId',
          },
        },
      },
      {
        $lookup: {
          from: 'orders',
          localField: 'orderId',
          foreignField: '_id',
          as: 'order',
        },
      },
      {
        $replaceRoot: {
          newRoot: { $mergeObjects: [{ $arrayElemAt: ['$order', 0] }, '$$ROOT'] },
        },
      },
      { $project: { _id: 0, orderId: 0, order: 0 } },
    ]);

    res.status(200).send(branchHistory);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getInstituteBranchHistory;
