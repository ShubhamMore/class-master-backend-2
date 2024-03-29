const express = require('express');

const auth = require('../middleware/auth');

const getBranchStorage = require('../controller/branch-storage-controller/getBranchStorage');
const removeBranchExtraStorage = require('../controller/branch-storage-controller/removeBranchExtraStorage');
const updateBranchStorage = require('../controller/branch-storage-controller/updateBranchStorage');

const router = new express.Router();

router.post('/getBranchStorage', auth, async (req, res) => {
  await getBranchStorage(req, res);
});

router.post('/removeBranchExtraStorage', auth, async (req, res) => {
  await removeBranchExtraStorage(req, res);
});

router.post('/updateBranchStorage', auth, async (req, res) => {
  await updateBranchStorage(req, res);
});

module.exports = router;
