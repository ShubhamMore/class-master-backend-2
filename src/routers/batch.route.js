const express = require('express');

const auth = require('../middleware/auth');

const newBatch = require('../controller/batch-controller/newBatch');
const getBatches = require('../controller/batch-controller/getBatches');
const getBatch = require('../controller/batch-controller/getBatch');
const getBatchSubjects = require('../controller/batch-controller/getBatchSubjects');
const getBatchForEditing = require('../controller/batch-controller/getBatchForEditing');
const updateBatch = require('../controller/batch-controller/updateBatch');
const changeBatchStatus = require('../controller/batch-controller/changeBatchStatus');
const deleteBatch = require('../controller/batch-controller/deleteBatch');

const router = new express.Router();

router.post('/newBatch', auth, async (req, res) => {
  await newBatch(req, res);
});

router.post('/getBatches', auth, async (req, res) => {
  await getBatches(req, res);
});

router.post('/getBatch', auth, async (req, res) => {
  await getBatch(req, res);
});

router.post('/getBatchSubjects', auth, async (req, res) => {
  await getBatchSubjects(req, res);
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

router.post('/deleteBatch', auth, async (req, res) => {
  await deleteBatch(req, res);
});

module.exports = router;
