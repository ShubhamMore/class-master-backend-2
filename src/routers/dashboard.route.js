const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');

const getAdminDashboard = require('../controller/dashboard-controller/getAdminDashboard');
const getInstituteDashboard = require('../controller/dashboard-controller/getInstituteDashboard');
const getBranchDashboard = require('../controller/dashboard-controller/getBranchDashboard');
const getBranchDashboardForEmployee = require('../controller/dashboard-controller/getBranchDashboardForEmployee');
const getStudentBranchDashboard = require('../controller/dashboard-controller/getStudentBranchDashboard');

const router = new express.Router();

router.post('/getAdminDashboard', auth, adminAuth, async (req, res) => {
  await getAdminDashboard(req, res);
});

router.post('/getInstituteDashboard', auth, async (req, res) => {
  await getInstituteDashboard(req, res);
});

router.post('/getBranchDashboard', auth, async (req, res) => {
  await getBranchDashboard(req, res);
});

router.post('/getBranchDashboardForEmployee', auth, async (req, res) => {
  await getBranchDashboardForEmployee(req, res);
});

router.post('/getStudentBranchDashboard', auth, async (req, res) => {
  await getStudentBranchDashboard(req, res);
});

module.exports = router;
