const express = require('express');

const auth = require('../middleware/auth');
const adminBranchAuth = require('../middleware/admin-branch-auth');
const adminBranchStaffAuth = require('../middleware/admin-branch-staff-auth');
const staffAuth = require('../middleware/staff-auth');

const newSalary = require('../controller/salary-controller/newSalary');
const getAllSalaries = require('../controller/salary-controller/getAllSalaries');
const getAllSalariesForStaff = require('../controller/salary-controller/getAllSalariesForStaff');
const getSalary = require('../controller/salary-controller/getSalary');
const changeSalaryStatus = require('../controller/salary-controller/changeSalaryStatus');
const deleteSalary = require('../controller/salary-controller/deleteSalary');

const router = new express.Router();

router.post('/newSalary', auth, adminBranchAuth, async (req, res) => {
  await newSalary(req, res);
});

router.post('/getAllSalaries', auth, adminBranchAuth, async (req, res) => {
  await getAllSalaries(req, res);
});

router.post('/getAllSalariesForStaff', auth, staffAuth, async (req, res) => {
  await getAllSalariesForStaff(req, res);
});

router.post('/getSalary', auth, adminBranchStaffAuth, async (req, res) => {
  await getSalary(req, res);
});

router.post('/changeSalaryStatus', auth, adminBranchAuth, async (req, res) => {
  await changeSalaryStatus(req, res);
});

router.post('/deleteSalary', auth, adminBranchAuth, async (req, res) => {
  await deleteSalary(req, res);
});

module.exports = router;
