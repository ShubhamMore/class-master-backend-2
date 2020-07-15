const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');

const saveImsMasterIds = require('../controller/ims-master-controller/saveImsMasterIds');
const getImsMasterIds = require('../controller/ims-master-controller/getImsMasterIds');

const router = new express.Router();

router.post('/saveImsMasterIds', auth, adminAuth, async (req, res) => {
  await saveImsMasterIds(req, res);
});

router.post('/getImsMasterIds', auth, adminAuth, async (req, res) => {
  await getImsMasterIds(req, res);
});

module.exports = router;
