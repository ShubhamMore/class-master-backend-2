const express = require('express');

const auth = require('../middleware/auth');

const generateZoomAuthToken = require('../controller/zoom-controller/generateZoomAuthToken');
const getZoomAuthLink = require('../controller/zoom-controller/getZoomAuthLink');

const router = new express.Router();

router.get('/generateZoomAuthToken', async (req, res) => {
  await generateZoomAuthToken(req, res);
});

router.post('/getZoomAuthLink', auth, async (req, res) => {
  await getZoomAuthLink(req, res);
});

module.exports = router;
