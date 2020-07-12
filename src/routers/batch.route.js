const express = require('express');

const auth = require('../middleware/auth');

const newBatch = require('../controller/batch-controller/newBatch');
const getBatch = require('../controller/batch-controller/getBatch');
const getBatchForEditing = require('../controller/batch-controller/getBatchForEditing');
const updateBatch = require('../controller/batch-controller/editBatch');
const changeBatchStatus = require('../controller/batch-controller/changeBatchStatus');

const router = new express.Router();

router.post('/newBatch', auth, async (req, res) => {
  await newBatch(req, res);
});

router.post('/getBatch', auth, async (req, res) => {
  await getBatch(req, res);
});

router.post('/getBatchForEditing', auth, async (req, res) => {
  await getBatchForEditing(req, res);
});

router.post('/updateBatch', auth, async (req, res) => {
  await updateBatch(req, res);
});

router.post('/changeBatchStatus', auth, async (req, res) => {
  await changeBatchStatus(req, res);
});

module.exports = router;
