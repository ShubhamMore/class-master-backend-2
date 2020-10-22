const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');

const saveAdminZoomKeys = require('../controller/admin-controller/saveAdminZoomKeys');
const getAdminZoomAuthLink = require('../controller/admin-controller/getAdminZoomAuthLink');
const getAdminZoomKeys = require('../controller/admin-controller/getAdminZoomKeys');

const router = new express.Router();

router.post('/saveAdminZoomKeys', auth, adminAuth, async (req, res) => {
  await saveAdminZoomKeys(req, res);
});

router.post('/getAdminZoomAuthLink', auth, adminAuth, async (req, res) => {
  await getAdminZoomAuthLink(req, res);
});

router.get('/getAdminZoomKeys', auth, adminAuth, async (req, res) => {
  await getAdminZoomKeys(req, res);
});

module.exports = router;
