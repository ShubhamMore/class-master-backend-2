const MemberShipPlan = require('../../models/membership-plan.model');
const errorHandler = require('../../handler/error.handler');

const saveMembershipPlan = async (req, res) => {
  try {
    const membershipPlans = ['monthly', 'quarterly', 'half-yearly', 'yearly'];

    if (!membershipPlans.includes(req.body.name)) {
      throw new Error('Invalid Membership Plan').status(400);
    }

    await MemberShipPlan.findOneAndUpdate({ name: req.body.name }, req.body, {
      upsert: true,
    });

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = saveMembershipPlan;
