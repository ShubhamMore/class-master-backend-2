const express = require('express');

const auth = require('../middleware/auth');
const adminBranchEmployeeAuth = require('../middleware/admin-branch-staff-auth');

const getStudentsForExam = require('../controller/exam-controller/getStudentsForExam');
const saveExam = require('../controller/exam-controller/saveExam');
const getExams = require('../controller/exam-controller/getExams');
const getExamsPerformance = require('../controller/exam-controller/getExamsPerformance');
const getExam = require('../controller/exam-controller/getExam');
const getExamReport = require('../controller/exam-controller/getExamReport');
const editExam = require('../controller/exam-controller/editExam');
const deleteExam = require('../controller/exam-controller/deleteExam');

const router = new express.Router();

router.post('/getStudentsForExam', auth, adminBranchEmployeeAuth, async (req, res) => {
  await getStudentsForExam(req, res);
});

router.post('/saveExam', auth, adminBranchEmployeeAuth, async (req, res) => {
  await saveExam(req, res);
});

router.post('/getExams', auth, adminBranchEmployeeAuth, async (req, res) => {
  await getExams(req, res);
});

router.post('/getExam', auth, adminBranchEmployeeAuth, async (req, res) => {
  await getExam(req, res);
});

router.post('/getExamForEditing', auth, adminBranchEmployeeAuth, async (req, res) => {
  await getExam(req, res);
});

router.post('/updateExam', auth, adminBranchEmployeeAuth, async (req, res) => {
  await updateExam(req, res);
});

router.post('/saveExamScore', auth, adminBranchEmployeeAuth, async (req, res) => {
  await saveExamScore(req, res);
});

router.post('/getExamScore', auth, adminBranchEmployeeAuth, async (req, res) => {
  await saveExamScore(req, res);
});

router.post('/getExamScoreForEditing', auth, adminBranchEmployeeAuth, async (req, res) => {
  await getExam(req, res);
});

router.post('/updateExamScore', auth, adminBranchEmployeeAuth, async (req, res) => {
  await updateExam(req, res);
});

router.post('/deleteExam', auth, adminBranchEmployeeAuth, async (req, res) => {
  await deleteExam(req, res);
});

module.exports = router;
