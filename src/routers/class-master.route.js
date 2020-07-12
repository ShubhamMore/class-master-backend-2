const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');

const saveClassMasterIds = require('../controller/class-master-controller/saveClassMasterIds');
const getClassMasterIds = require('../controller/class-master-controller/getClassMasterIds');

const router = new express.Router();

router.post('/saveClassMasterIds', auth, adminAuth, async (req, res) => {
  await saveClassMasterIds(req, res);
});

router.post('/getClassMasterIds', auth, adminAuth, async (req, res) => {
  await getClassMasterIds(req, res);
});

module.exports = router;
