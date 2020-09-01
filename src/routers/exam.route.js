const express = require('express');

const auth = require('../middleware/auth');

const getStudentsForExam = require('../controller/exam-controller/getStudentsForExam');
const saveStudentsMarks = require('../controller/exam-controller/saveStudentsMarks');
const saveExam = require('../controller/exam-controller/saveExam');
const getExams = require('../controller/exam-controller/getExams');
const getExam = require('../controller/exam-controller/getExam');
const getExamForEditing = require('../controller/exam-controller/getExamForEditing');
const editExam = require('../controller/exam-controller/editExam');
const deleteExam = require('../controller/exam-controller/deleteExam');
const saveExamScore = require('../controller/exam-controller/saveExamScore');

const router = new express.Router();

router.post('/getStudentsForExam', auth, async (req, res) => {
  await getStudentsForExam(req, res);
});

router.post('/saveStudentsMarks', auth, async (req, res) => {
  await saveStudentsMarks(req, res);
});

router.post('/saveExam', auth, async (req, res) => {
  await saveExam(req, res);
});

router.post('/getExams', auth, async (req, res) => {
  await getExams(req, res);
});

router.post('/getExam', auth, async (req, res) => {
  await getExam(req, res);
});

router.post('/getExamForEditing', auth, async (req, res) => {
  await getExamForEditing(req, res);
});

router.post('/editExam', auth, async (req, res) => {
  await editExam(req, res);
});

router.post('/deleteExam', auth, async (req, res) => {
  await deleteExam(req, res);
});

router.post('/saveExamScore', auth, async (req, res) => {
  await saveExamScore(req, res);
});

module.exports = router;
