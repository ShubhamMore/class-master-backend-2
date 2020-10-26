const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getDate = (date) => {
  date = new Date(date);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
};

const activateBranch = async (req, res) => {
  try {
    const date = new Date();
    const dateMilliseconds = date.getTime();
    const month = date.getMonth();
    const activationDate = getDate(dateMilliseconds);

    let expiryDate;

    const day = 24 * 60 * 60 * 1000;

    if (req.body.planType === 'monthly') {
      const nextDate = dateMilliseconds + day * 30 * 1;
      expiryDate = getDate(nextDate);
    } else if (req.body.planType === 'quarterly') {
      const nextDate = dateMilliseconds + day * (month % 4 === 0 ? 3 : 2) + day * 30 * duration;
      expiryDate = getDate(nextDate);
    } else if (req.body.planType === 'half-yearly') {
      const nextDate = dateMilliseconds + day * (month % 2 === 0 ? 3 : 2) + day * 30 * 6;
      expiryDate = getDate(nextDate);
    } else if (req.body.planType === 'yearly') {
      const nextDate = dateMilliseconds + day * 5 + day * 30 * 12;
      expiryDate = getDate(nextDate);
    } else {
      const nextDate = date + day * 30 * 12;
      expiryDate = getDate(nextDate);
    }

    const branch = await Branch.findByIdAndUpdate(req.body.id, {
      currentPlanDetails: {
        planType: req.body.planType,
        activationDate,
        expiryDate,
      },
      status: true,
    });
    if (!branch) {
      throw new Error('Branch Activation Failed');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = activateBranch;