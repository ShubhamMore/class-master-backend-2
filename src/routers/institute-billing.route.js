const express = require('express');

const auth = require('../middleware/auth');

const saveBillingDetails = require('../controller/billing-details-controller/saveBillingDetails');
const getBillingDetails = require('../controller/billing-details-controller/getBillingDetails');

const router = new express.Router();

router.post('/saveBillingDetails', auth, async (req, res) => {
  await saveBillingDetails(req, res);
});

router.post('/getBillingDetails', auth, async (req, res) => {
  await getBillingDetails(req, res);
});

module.exports = router;
