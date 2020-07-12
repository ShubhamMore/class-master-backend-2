const express = require('express');

const auth = require('../middleware/auth');
const adminBranchAuth = require('../middleware/admin-branch-auth');
const adminBranchStaffAuth = require('../middleware/admin-branch-staff-auth');

const newSchedule = require('../controller/schedule-controller/newSchedule');
const getAllSchedules = require('../controller/schedule-controller/getAllSchedule');
const getSchedule = require('../controller/schedule-controller/getSchedule');
const getScheduleForEditing = require('../controller/schedule-controller/getScheduleForEditing');
const changeScheduleStatus = require('../controller/schedule-controller/getScheduleForEditing');
const deleteSchedule = require('../controller/schedule-controller/deleteSchedule');

const router = new express.Router();

router.post('/newSchedule', auth, adminBranchAuth, async (req, res) => {
  await newSchedule(req, res);
});

router.post('/getAllSchedules', auth, adminBranchAuth, async (req, res) => {
  await getAllSchedules(req, res);
});

router.post('/getSchedule', auth, adminBranchStaffAuth, async (req, res) => {
  await getSchedule(req, res);
});

router.post('/getScheduleForEditing', auth, adminBranchStaffAuth, async (req, res) => {
  await getScheduleForEditing(req, res);
});

router.post('/changeScheduleStatus', auth, adminBranchAuth, async (req, res) => {
  await changeScheduleStatus(req, res);
});

router.post('/deleteSchedule', auth, adminBranchAuth, async (req, res) => {
  await deleteSchedule(req, res);
});

module.exports = router;
