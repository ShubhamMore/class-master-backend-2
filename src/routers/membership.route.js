const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');

const getMembershipPlan = require('../controller/membership-controller/getMembershipPlan');
const getMembershipPlans = require('../controller/membership-controller/getMembershipPlans');
const saveMembershipPlan = require('../controller/membership-controller/saveMembershipPlan');

const router = new express.Router();

router.post('/getMembershipPlan', auth, async (req, res) => {
  await getMembershipPlan(req, res);
});

router.post('/getMembershipPlans', auth, async (req, res) => {
  await getMembershipPlans(req, res);
});

router.post('/saveMembershipPlan', auth, adminAuth, async (req, res) => {
  await saveMembershipPlan(req, res);
});

module.exports = router;
