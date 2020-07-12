const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');
const branchAuth = require('../middleware/branch-auth');
const staffAuth = require('../middleware/staff-auth');
const adminBranchStaffAuth = require('../middleware/admin-branch-staff-auth');

const newOnlineExam = require('../controller/online-exam-controller/newOnlineExam');
const getOnlineExam = require('../controller/online-exam-controller/getOnlineExam');
const getOnlineExamForEditing = require('../controller/online-exam-controller/getOnlineExamForEditing');
const getOnlineExams = require('../controller/online-exam-controller/getOnlineExams');
const getOnlineExamsForStudent = require('../controller/online-exam-controller/getOnlineExamsForStudent');
const editOnlineExam = require('../controller/online-exam-controller/editOnlineExam');
const changeOnlineExamStatus = require('../controller/online-exam-controller/changeOnlineExamStatus');
const deleteOnlineExam = require('../controller/online-exam-controller/deleteOnlineExam');
const saveOnlineExamResult = require('../controller/online-exam-controller/saveOnlineExamResult');
const getOnlineExamResult = require('../controller/online-exam-controller/getOnlineExamResult');

const router = new express.Router();

router.post('/newOnlineExam', auth, adminBranchStaffAuth, async (req, res) => {
  await newOnlineExam(req, res);
});

router.post('/getOnlineExam', auth, async (req, res) => {
  await getOnlineExam(req, res);
});

router.post('/getOnlineExamForEditing', auth, adminBranchStaffAuth, async (req, res) => {
  await getOnlineExamForEditing(req, res);
});

router.post('/getOnlineExams', auth, adminBranchStaffAuth, async (req, res) => {
  await getOnlineExams(req, res);
});

router.post('/getOnlineExamsForStudent', auth, async (req, res) => {
  await getOnlineExamsForStudent(req, res);
});

router.post('/editOnlineExam', auth, adminBranchStaffAuth, async (req, res) => {
  await editOnlineExam(req, res);
});

router.post('/changeOnlineExamStatus', auth, adminBranchStaffAuth, async (req, res) => {
  await changeOnlineExamStatus(req, res);
});

router.post('/deleteOnlineExam', auth, adminBranchStaffAuth, async (req, res) => {
  await deleteOnlineExam(req, res);
});

router.post('/getOnlineExamResult', auth, async (req, res) => {
  await getOnlineExamResult(req, res);
});

router.post('/saveOnlineExamResult', auth, async (req, res) => {
  await saveOnlineExamResult(req, res);
});

module.exports = router;
