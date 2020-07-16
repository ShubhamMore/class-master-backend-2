const express = require('express');

const auth = require('../middleware/auth');

const getBranchEmployees = require('../controller/employee-branch-controller/getBranchEmployees');
const getBranchEmployee = require('../controller/employee-branch-controller/getBranchEmployee');
const getBranchEmployeeForSalary = require('../controller/employee-branch-controller/getBranchEmployeeForSalary');
const newBranchEmployee = require('../controller/employee-branch-controller/newBranchEmployee');
const getBranchEmployeeForEditing = require('../controller/employee-branch-controller/getBranchEmployeeForEditing');
const updateBranchEmployee = require('../controller/employee-branch-controller/updateBranchEmployee');
const changeBranchEmployeeStatus = require('../controller/employee-branch-controller/changeBranchEmployeeStatus');
const deleteBranchEmployee = require('../controller/employee-branch-controller/deleteBranchEmployee');

const router = new express.Router();

router.post('/getBranchEmployees', auth, async (req, res) => {
  await getBranchEmployees(req, res);
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
