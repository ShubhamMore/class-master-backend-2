const express = require('express');

const auth = require('../middleware/auth');

const getBranchSMS = require('../controller/branch-sms-controller/getBranchSMS');
const updateBranchSMS = require('../controller/branch-sms-controller/updateBranchSMS');

const router = new express.Router();

router.post('/getBranchSMS', auth, async (req, res) => {
  await getBranchSMS(req, res);
});

router.post('/updateBranchSMS', auth, async (req, res) => {
  await updateBranchSMS(req, res);
});

module.exports = router;
