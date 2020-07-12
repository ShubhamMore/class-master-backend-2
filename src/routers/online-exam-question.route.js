const express = require('express');

const auth = require('../middleware/auth');
const adminBranchStaffAuth = require('../middleware/admin-branch-staff-auth');

const newOnlineExamQuestion = require('../controller/online-exam-question-controller/newOnlineExamQuestion');
const editOnlineExamQuestion = require('../controller/online-exam-question-controller/editOnlineExamQuestion');
const getOnlineExamQuestion = require('../controller/online-exam-question-controller/getOnlineExamQuestion');
const getOnlineExamQuestions = require('../controller/online-exam-question-controller/getOnlineExamQuestions');
const getOnlineExamQuestionsForStudent = require('../controller/online-exam-question-controller/getOnlineExamQuestionsForStudent');
const changeOnlineExamQuestionStatus = require('../controller/online-exam-question-controller/changeOnlineExamQuestionStatus');
const deleteOnlineExamQuestion = require('../controller/online-exam-question-controller/deleteOnlineExamQuestion');

const router = new express.Router();

router.post('/newOnlineExamQuestion', auth, adminBranchStaffAuth, async (req, res, next) => {
  await newOnlineExamQuestion(req, res);
});

router.post('/editOnlineExamQuestion', auth, adminBranchStaffAuth, async (req, res, next) => {
  await editOnlineExamQuestion(req, res);
});

router.post('/getOnlineExamQuestion', auth, async (req, res) => {
  await getOnlineExamQuestion(req, res);
});

router.post('/getOnlineExamQuestions', auth, adminBranchStaffAuth, async (req, res) => {
  await getOnlineExamQuestions(req, res);
});

router.post('/getOnlineExamQuestionsForStudent', auth, async (req, res) => {
  await getOnlineExamQuestionsForStudent(req, res);
});

router.post('/changeOnlineExamQuestionStatus', auth, adminBranchStaffAuth, async (req, res) => {
  await changeOnlineExamQuestionStatus(req, res);
});

router.post('/deleteOnlineExamQuestion', auth, adminBranchStaffAuth, async (req, res) => {
  await deleteOnlineExamQuestion(req, res);
});

module.exports = router;
