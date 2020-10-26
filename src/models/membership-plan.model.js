const mongoose = require('mongoose');
const membershipPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

membershipPlanSchema.methods.toJSON = function () {
  const membershipPlan = this;
  const membershipPlanObject = membershipPlan.toObject();

  delete membershipPlanObject.__v;

  return membershipPlanObject;
};

const MembershipPlan = mongoose.model('MembershipPlan', membershipPlanSchema);

module.exports = MembershipPlan;
