const express = require('express');

const auth = require('../middleware/auth');

const createEmployeeLeave = require('../controller/employee-leave-controller/createEmployeeLeave');
const getEmployeeLeaves = require('../controller/employee-leave-controller/getEmployeeLeaves');
const getBranchAllEmployeeLeaves = require('../controller/employee-leave-controller/getBranchAllEmployeeLeaves');
const getBranchEmployeeLeaves = require('../controller/employee-leave-controller/getBranchEmployeeLeaves');
const getMyBranchLeaves = require('../controller/employee-leave-controller/getMyBranchLeaves');
const getEmployeeLeave = require('../controller/employee-leave-controller/getEmployeeLeave');
const changeEmployeeLeaveStatus = require('../controller/employee-leave-controller/changeEmployeeLeaveStatus');
const updateEmployeeLeave = require('../controller/employee-leave-controller/updateEmployeeLeave');
const deleteEmployeeLeave = require('../controller/employee-leave-controller/deleteEmployeeLeave');

const router = new express.Router();

router.post('/createEmployeeLeave', auth, async (req, res) => {
  await createEmployeeLeave(req, res);
});

router.post('/getBranchAllEmployeeLeaves', auth, async (req, res) => {
  await getBranchAllEmployeeLeaves(req, res);
});

router.post('/getEmployeeLeaves', auth, async (req, res) => {
  await getEmployeeLeaves(req, res);
});

router.post('/getBranchEmployeeLeaves', auth, async (req, res) => {
  await getBranchEmployeeLeaves(req, res);
});

router.post('/getMyBranchLeaves', auth, async (req, res) => {
  await getMyBranchLeaves(req, res);
});

router.post('/getEmployeeLeave', auth, async (req, res) => {
  await getEmployeeLeave(req, res);
});

router.post('/changeEmployeeLeaveStatus', auth, async (req, res) => {
  await changeEmployeeLeaveStatus(req, res);
});

router.post('/updateEmployeeLeave', auth, async (req, res) => {
  await updateEmployeeLeave(req, res);
});

router.post('/deleteEmployeeLeave', auth, async (req, res) => {
  await deleteEmployeeLeave(req, res);
});

module.exports = router;
