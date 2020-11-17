const express = require('express');

const auth = require('../middleware/auth');

const newBranch = require('../controller/branch-controller/newBranch');
const getBranches = require('../controller/branch-controller/getBranches');
const getBranchCoursesAndBatches = require('../controller/branch-controller/getBranchCoursesAndBatches');
const getBranchesForEmployee = require('../controller/branch-controller/getBranchesForEmployee');
const getBranchesForStudent = require('../controller/branch-controller/getBranchesForStudent');
const checkBranchStatus = require('../controller/branch-controller/checkBranchStatus');
const getBranch = require('../controller/branch-controller/getBranch');
const getBranchForStudent = require('../controller/branch-controller/getBranchForStudent');
const getBranchForEditing = require('../controller/branch-controller/getBranchForEditing');
const updateBranch = require('../controller/branch-controller/updateBranch');
const activateBranch = require('../controller/branch-controller/activateBranch');
const deactivateBranch = require('../controller/branch-controller/deactivateBranch.js');
const changeBranchStatus = require('../controller/branch-controller/changeBranchStatus');
const deleteBranch = require('../controller/branch-controller/deleteBranch');

const router = new express.Router();

router.post('/newBranch', auth, async (req, res) => {
  await newBranch(req, res);
});

router.post('/getBranches', auth, async (req, res) => {
  await getBranches(req, res);
});

router.post('/getBranchCoursesAndBatches', auth, async (req, res) => {
  await getBranchCoursesAndBatches(req, res);
});

router.post('/getBranchesForEmployee', auth, async (req, res) => {
  await getBranchesForEmployee(req, res);
});

router.post('/getBranchesForStudent', auth, async (req, res) => {
  await getBranchesForStudent(req, res);
});

router.post('/getBranchForStudent', auth, async (req, res) => {
  await getBranchForStudent(req, res);
});

router.post('/checkBranchStatus', auth, async (req, res) => {
  await checkBranchStatus(req, res);
});

router.post('/getBranch', auth, async (req, res) => {
  await getBranch(req, res);
});

router.post('/getBranchForEditing', auth, async (req, res) => {
  await getBranchForEditing(req, res);
});

router.post('/updateBranch', auth, async (req, res) => {
  await updateBranch(req, res);
});

router.post('/activateBranch', auth, async (req, res) => {
  await activateBranch(req, res);
});

router.post('/deactivateBranch', auth, async (req, res) => {
  await deactivateBranch(req, res);
});

router.post('/changeBranchStatus', auth, async (req, res) => {
  await changeBranchStatus(req, res);
});

router.post('/deleteBranch', auth, async (req, res) => {
  await deleteBranch(req, res);
});

module.exports = router;
