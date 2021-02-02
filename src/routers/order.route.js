const express = require('express');

const auth = require('../middleware/auth');

const generateMembershipOrder = require('../controller/order-controller/generateMembershipOrder');
const generateStorageOrder = require('../controller/order-controller/generateStorageOrder');
const generateSMSOrder = require('../controller/order-controller/generateSMSOrder');
const deleteOrder = require('../controller/order-controller/deleteOrder');

const router = new express.Router();

router.post('/generateMembershipOrder', auth, async (req, res) => {
  await generateMembershipOrder(req, res);
});

router.post('/generateStorageOrder', auth, async (req, res) => {
  await generateStorageOrder(req, res);
});

router.post('/generateSMSOrder', auth, async (req, res) => {
  await generateSMSOrder(req, res);
});

router.post('/deleteOrder', auth, async (req, res) => {
  await deleteOrder(req, res);
});

module.exports = router;
