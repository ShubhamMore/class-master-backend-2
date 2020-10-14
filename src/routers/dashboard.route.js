const express = require('express');

const auth = require('../middleware/auth');

const getInstituteDashboard = require('../controller/dashboard-controller/getInstituteDashboard');
const getBranchDashboard = require('../controller/dashboard-controller/getBranchDashboard');
const getEmployeeDashboard = require('../controller/dashboard-controller/getEmployeeDashboard');
const getStudentDashboard = require('../controller/dashboard-controller/getStudentDashboard');

const router = new express.Router();

router.get('/getInstituteDashboard', auth, async (req, res) => {
  await getInstituteDashboard(req, res);
});

router.get('/getBranchDashboard', auth, async (req, res) => {
  await getBranchDashboard(req, res);
});

router.get('/getEmployeeDashboard', auth, async (req, res) => {
  await getEmployeeDashboard(req, res);
});

router.get('/getStudentDashboard', auth, async (req, res) => {
  await getStudentDashboard(req, res);
});

module.exports = router;
