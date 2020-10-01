const express = require('express');

const auth = require('../middleware/auth');

const getBranchEmployees = require('../controller/branch-employee-controller/getBranchEmployees');
const getBranchEmployeesForBatch = require('../controller/branch-employee-controller/getBranchEmployeesForBatch');
const getBranchEmployeeNameIdsForBatch = require('../controller/branch-employee-controller/getBranchEmployeeNameIdsForBatch');
const getBranchEmployee = require('../controller/branch-employee-controller/getBranchEmployee');
const getBranchEmployeeForSalary = require('../controller/branch-employee-controller/getBranchEmployeeForSalary');
const newBranchEmployee = require('../controller/branch-employee-controller/newBranchEmployee');
const getBranchEmployeeForEditing = require('../controller/branch-employee-controller/getBranchEmployeeForEditing');
const updateBranchEmployee = require('../controller/branch-employee-controller/updateBranchEmployee');
const changeBranchEmployeeStatus = require('../controller/branch-employee-controller/changeBranchEmployeeStatus');
const deleteBranchEmployee = require('../controller/branch-employee-controller/deleteBranchEmployee');

const router = new express.Router();

router.post('/getBranchEmployees', auth, async (req, res) => {
  await getBranchEmployees(req, res);
});

router.post('/getBranchEmployeesForBatch', auth, async (req, res) => {
  await getBranchEmployeesForBatch(req, res);
});

router.post('/getBranchEmployeeNameIdsForBatch', auth, async (req, res) => {
  await getBranchEmployeeNameIdsForBatch(req, res);
});

router.post('/getBranchEmployee', auth, async (req, res) => {
  await getBranchEmployee(req, res);
});

router.post('/getBranchEmployeeForSalary', auth, async (req, res) => {
  await getBranchEmployeeForSalary(req, res);
});

router.post('/newBranchEmployee', auth, async (req, res) => {
  await newBranchEmployee(req, res);
});

router.post('/getBranchEmployeeForEditing', auth, async (req, res) => {
  await getBranchEmployeeForEditing(req, res);
});

router.post('/updateBranchEmployee', auth, async (req, res) => {
  await updateBranchEmployee(req, res);
});

router.post('/changeBranchEmployeeStatus', auth, async (req, res) => {
  await changeBranchEmployeeStatus(req, res);
});

router.post('/deleteBranchEmployee', auth, async (req, res) => {
  await deleteBranchEmployee(req, res);
});

module.exports = router;
