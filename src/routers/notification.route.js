const express = require('express');

const auth = require('../middleware/auth');

const sendNotification = require('../controller/notification-controller/sendNotification');
const getNotification = require('../controller/notification-controller/getNotification');
const getNotifications = require('../controller/notification-controller/getNotifications');
const deleteNotification = require('../controller/notification-controller/deleteNotification');
const changeNotificationStatus = require('../controller/notification-controller/changeNotificationStatus');

const router = new express.Router();

router.post('/sendNotification', auth, async (req, res) => {
  await sendNotification(req, res);
});

router.post('/getNotification', auth, async (req, res) => {
  await getNotification(req, res);
});

router.post('/getNotifications', auth, async (req, res) => {
  await getNotifications(req, res);
});

router.post('/deleteNotification', auth, async (req, res) => {
  await deleteNotification(req, res);
});

router.post('/changeNotificationStatus', auth, async (req, res) => {
  await changeNotificationStatus(req, res);
});

module.exports = router;
