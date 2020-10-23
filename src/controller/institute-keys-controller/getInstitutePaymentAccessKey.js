const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');
const mongoose = require('mongoose');

const getInstitutePaymentAccessKey = async (req, res) => {
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
          accessKey: '$instituteKeys.paymentGatewayKeys.accessKey',
        },
      },
    ]);

    res.status(200).send(instituteKeys[0]);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = getInstitutePaymentAccessKey;
