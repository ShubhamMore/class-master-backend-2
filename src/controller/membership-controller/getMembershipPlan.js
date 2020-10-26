const MemberShipPlan = require('../../models/membership-plan.model');
const errorHandler = require('../../handler/error.handler');

const getMembershipPlan = async (req, res) => {
  try {
    const membershipPlans = ['monthly', 'quarterly', 'half-yearly', 'yearly'];

    if (!membershipPlans.includes(req.body.name)) {
      throw new Error('Invalid Membership Plan').status(400);
    }

    const membershipPlan = await MemberShipPlan.findOne({ name: req.body.name });

    res.status(200).send(membershipPlan);
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = getMembershipPlan;
