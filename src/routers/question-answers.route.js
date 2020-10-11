const express = require('express');

const auth = require('../middleware/auth');

const getLectureQuestionAnswers = require('../controller/question-answers-controller/getLectureQuestionAnswers');
const getLectureQuestionAnswer = require('../controller/question-answers-controller/getLectureQuestionAnswer');
const newLectureQuestion = require('../controller/question-answers-controller/newLectureQuestion');
const editLectureQuestion = require('../controller/question-answers-controller/editLectureQuestion');
const deleteLectureQuestion = require('../controller/question-answers-controller/deleteLectureQuestion');
const newLectureQuestionAnswer = require('../controller/question-answers-controller/newLectureQuestionAnswer');
const editLectureQuestionAnswer = require('../controller/question-answers-controller/editLectureQuestionAnswer');
const deleteLectureQuestionAnswer = require('../controller/question-answers-controller/deleteLectureQuestionAnswer');

const router = new express.Router();

router.post('/getLectureQuestionAnswers', auth, async (req, res) => {
  await getLectureQuestionAnswers(req, res);
});

router.post('/getLectureQuestionAnswer', auth, async (req, res) => {
  await getLectureQuestionAnswer(req, res);
});

router.post('/newLectureQuestion', auth, async (req, res) => {
  await newLectureQuestion(req, res);
});

router.post('/editLectureQuestion', auth, async (req, res) => {
  await editLectureQuestion(req, res);
});

router.post('/deleteLectureQuestion', auth, async (req, res) => {
  await deleteLectureQuestion(req, res);
});

router.post('/newLectureQuestionAnswers', auth, async (req, res) => {
  await newLectureQuestionAnswer(req, res);
});

router.post('/editLectureQuestionAnswer', auth, async (req, res) => {
  await editLectureQuestionAnswer(req, res);
});

router.post('/deleteLectureQuestionAnswer', auth, async (req, res) => {
  await deleteLectureQuestionAnswer(req, res);
});

module.exports = router;
