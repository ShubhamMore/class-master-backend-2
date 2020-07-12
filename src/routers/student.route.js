const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');
const branchAuth = require('../middleware/branch-auth');
const staffAuth = require('../middleware/staff-auth');
const adminBranchStaffAuth = require('../middleware/admin-branch-staff-auth');

const newStudent = require('../controller/student-controller/newStudent');
const getStudents = require('../controller/student-controller/getStudents');
const getStudent = require('../controller/student-controller/getStudent');
const changeStudentStatus = require('../controller/student-controller/changeStudentStatus');
const getStudentForPayment = require('../controller/student-controller/getStudentForPayment');

const getStudentHistory = require('../controller/student-controller/getStudentHistory');
const getBranchStudentHistory = require('../controller/student-controller/getBranchStudentHistory');
const getStaffStudentHistory = require('../controller/student-controller/getStaffStudentHistory');

const getStudentForEditing = require('../controller/student-controller/getStudentForEditing');
const getStaffStudentForEditing = require('../controller/student-controller/getStaffStudentForEditing');
const getBranchStudentForEditing = require('../controller/student-controller/getBranchStudentForEditing');
const getStudentProfile = require('../controller/student-controller/getStudentProfile');
const editStudent = require('../controller/student-controller/editStudent');

const router = new express.Router();
router.post('/newStudent', auth, adminBranchStaffAuth, async (req, res) => {
  await newStudent(req, res);
});

router.post('/getStudents', auth, adminBranchStaffAuth, async (req, res) => {
  await getStudents(req, res);
});

router.post('/getStudent', auth, async (req, res) => {
  await getStudent(req, res);
});

router.post('/changeStudentStatus', auth, adminBranchStaffAuth, async (req, res) => {
  await changeStudentStatus(req, res);
});

router.post('/getStudentForPayment', auth, adminBranchStaffAuth, async (req, res) => {
  await getStudentForPayment(req, res);
});

router.post('/getBranchStudentHistory', auth, branchAuth, async (req, res) => {
  await getBranchStudentHistory(req, res);
});

router.post('/getStaffStudentHistory', auth, staffAuth, async (req, res) => {
  await getStaffStudentHistory(req, res);
});

router.post('/getStudentHistory', auth, async (req, res) => {
  await getStudentHistory(req, res);
});

router.post('/getStudentForEditing', auth, adminAuth, async (req, res) => {
  await getStudentForEditing(req, res);
});

router.post('/getStaffStudentForEditing', auth, staffAuth, async (req, res) => {
  await getStaffStudentForEditing(req, res);
});

router.post('/getBranchStudentForEditing', auth, branchAuth, async (req, res) => {
  await getBranchStudentForEditing(req, res);
});

router.post('/getStudentProfile', auth, async (req, res) => {
  await getStudentProfile(req, res);
});

router.post('/editStudent', auth, adminBranchStaffAuth, async (req, res) => {
  await editStudent(req, res);
});

module.exports = router;
