const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');
const branchAuth = require('../middleware/branch-auth');
const staffAuth = require('../middleware/staff-auth');
const adminBranchAuth = require('../middleware/admin-branch-auth');
const adminBranchStaffAuth = require('../middleware/admin-branch-staff-auth');

const newStaff = require('../controller/staff-controller/newStaff');
const getAllStaff = require('../controller/staff-controller/getAllStaff');
const getAllStaffForContent = require('../controller/staff-controller/getAllStaffForContent');
const getStaff = require('../controller/staff-controller/getStaff');
const getStaffProfile = require('../controller/staff-controller/getStaffProfile');
const getStaffForSalary = require('../controller/staff-controller/getStaffForSalary');
const getStaffForEditing = require('../controller/staff-controller/getStaffForEditing');
const getBranchStaffForEditing = require('../controller/staff-controller/getBranchStaffForEditing');
const getStaffBranchCoursesBatches = require('../controller/staff-controller/getStaffBranchCoursesBatches');
const editStaff = require('../controller/staff-controller/editStaff');
const changeStaffStatus = require('../controller/staff-controller/changeStaffStatus');
const deleteStaff = require('../controller/staff-controller/deleteStaff');

const router = new express.Router();

router.post('/newStaff', auth, adminBranchAuth, async (req, res) => {
  await newStaff(req, res);
});

router.post('/getAllStaff', auth, adminBranchAuth, async (req, res) => {
  await getAllStaff(req, res);
});

router.post('/getAllStaffForContent', async (req, res) => {
  await getAllStaffForContent(req, res);
});

router.post('/getStaff', auth, adminBranchStaffAuth, async (req, res) => {
  await getStaff(req, res);
});

router.post('/getStaffProfile', auth, staffAuth, getStaffProfile, async (req, res) => {
  await getStaff(req, res);
});

router.post('/getStaffForSalary', auth, adminBranchAuth, async (req, res) => {
  await getStaffForSalary(req, res);
});

router.post('/getStaffForEditing', auth, adminAuth, async (req, res) => {
  await getStaffForEditing(req, res);
});

router.post('/getBranchStaffForEditing', auth, branchAuth, async (req, res) => {
  await getBranchStaffForEditing(req, res);
});

router.post('/getStaffBranchCoursesBatches', auth, staffAuth, async (req, res) => {
  await getStaffBranchCoursesBatches(req, res);
});

router.post('/editStaff', auth, adminBranchAuth, async (req, res) => {
  await editStaff(req, res);
});

router.post('/changeStaffStatus', auth, adminBranchAuth, async (req, res) => {
  await changeStaffStatus(req, res);
});

router.post('/deleteStaff', auth, adminBranchAuth, async (req, res) => {
  await deleteStaff(req, res);
});

module.exports = router;
