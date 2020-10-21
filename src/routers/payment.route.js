const express = require('express');

const auth = require('../middleware/auth');

const verifyPayment = require('../controller/payment-controller/verifyPayment');
const verifyInstitutePayment = require('../controller/payment-controller/verifyInstitutePayment');

const router = new express.Router();

router.post('/verifyPayment', auth, async (req, res) => {
  await verifyPayment(req, res);
});

router.post('/verifyInstitutePayment', auth, async (req, res) => {
  await verifyInstitutePayment(req, res);
});

module.exports = router;
