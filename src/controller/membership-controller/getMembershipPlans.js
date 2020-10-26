const MemberShipPlan = require('../../models/membership-plan.model');
const errorHandler = require('../../handler/error.handler');

const getMembershipPlans = async (req, res) => {
  try {
    const membershipPlans = await MemberShipPlan.find({});

    res.status(200).send(membershipPlans);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = getMembershipPlans;
