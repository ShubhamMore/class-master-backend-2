const express = require('express');

const auth = require('../middleware/auth');
const zoomAuth = require('../middleware/zoom-auth');

const generateZoomAuthToken = require('../controller/zoom-controller/generateZoomAuthToken');
const getZoomAuthLink = require('../controller/zoom-controller/getZoomAuthLink');

const createZoomMeeting = require('../controller/zoom-controller/createZoomMeeting');
const updateZoomMeeting = require('../controller/zoom-controller/updateZoomMeeting');
const deleteZoomMeeting = require('../controller/zoom-controller/deleteZoomMeeting');
const getZoomMeeting = require('../controller/zoom-controller/getZoomMeeting');
const getZoomMeetings = require('../controller/zoom-controller/getZoomMeetings');

const router = new express.Router();

router.get('/generateZoomAuthToken', async (req, res) => {
  await generateZoomAuthToken(req, res);
});

router.post('/getZoomAuthLink', auth, async (req, res) => {
  await getZoomAuthLink(req, res);
});

router.post('/createZoomMeeting', auth, zoomAuth, async (req, res) => {
  await createZoomMeeting(req, res);
});

router.post('/updateZoomMeeting', auth, zoomAuth, async (req, res) => {
  await updateZoomMeeting(req, res);
});

router.post('/deleteZoomMeeting', auth, zoomAuth, async (req, res) => {
  await deleteZoomMeeting(req, res);
});

router.post('/getZoomMeeting', auth, async (req, res) => {
  await getZoomMeeting(req, res);
});

router.post('/getZoomMeetings', auth, async (req, res) => {
  await getZoomMeetings(req, res);
});

module.exports = router;
