const express = require('express');

const auth = require('../middleware/auth');

const saveProfile = require('../controller/profile-controller/saveProfile');
const getProfile = require('../controller/profile-controller/getProfile');

const router = new express.Router();

router.post('/saveProfile', auth, async (req, res) => {
  await saveProfile(req, res);
});

router.post('/getProfile', auth, async (req, res) => {
  await getProfile(req, res);
});

module.exports = router;
