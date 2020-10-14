const express = require('express');

const auth = require('../middleware/auth');

const getInstituteDashboard = require('../controller/dashboard-controller/getInstituteDashboard');
const getBranchDashboard = require('../controller/dashboard-controller/getBranchDashboard');
const getEmployeeDashboard = require('../controller/dashboard-controller/getEmployeeDashboard');
const getStudentDashboard = require('../controller/dashboard-controller/getStudentDashboard');

const router = new express.Router();

router.post('/getInstituteDashboard', auth, async (req, res) => {
  await getInstituteDashboard(req, res);
});

router.post('/getBranchDashboard', auth, async (req, res) => {
  await getBranchDashboard(req, res);
});

router.post('/getEmployeeDashboard', auth, async (req, res) => {
  await getEmployeeDashboard(req, res);
});

router.post('/getStudentDashboard', auth, async (req, res) => {
  await getStudentDashboard(req, res);
});

module.exports = router;
