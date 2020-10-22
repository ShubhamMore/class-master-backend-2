const express = require('express');

const auth = require('../middleware/auth');

const getInstituteKeys = require('../controller/institute-keys-controller/getInstituteKeys');
const getInstitutePaymentAccessKey = require('../controller/institute-keys-controller/getInstitutePaymentAccessKey');
const saveInstitutePaymentGatewayKeys = require('../controller/institute-keys-controller/saveInstitutePaymentGatewayKeys');
const saveInstituteZoomKeys = require('../controller/institute-keys-controller/saveInstituteZoomKeys');

const router = new express.Router();

router.post('/getInstituteKeys', auth, async (req, res) => {
  await getInstituteKeys(req, res);
});

router.post('/getInstitutePaymentAccessKey', auth, async (req, res) => {
  await getInstitutePaymentAccessKey(req, res);
});

router.post('/saveInstitutePaymentGatewayKeys', auth, async (req, res) => {
  await saveInstitutePaymentGatewayKeys(req, res);
});

router.post('/saveInstituteZoomKeys', auth, async (req, res) => {
  await saveInstituteZoomKeys(req, res);
});

module.exports = router;
