const express = require('express');

const auth = require('../middleware/auth');

const newLecture = require('../controller/lecture-controller/newLecture');
const getLecture = require('../controller/lecture-controller/getLecture');
const getLecturesForStudent = require('../controller/lecture-controller/getLecturesForStudent');
const getLectureForEditing = require('../controller/lecture-controller/getLectureForEditing');
const getLectures = require('../controller/lecture-controller/getLectures');
const editLecture = require('../controller/lecture-controller/editLecture');
const changeLectureStatus = require('../controller/lecture-controller/changeLectureStatus');
const deleteLecture = require('../controller/lecture-controller/deleteLecture');

const router = new express.Router();

router.post('/newLecture', auth, async (req, res) => {
  await newLecture(req, res);
});

router.post('/getLecture', auth, async (req, res) => {
  await getLecture(req, res);
});

router.post('/getLecturesForStudent', auth, async (req, res) => {
  await getLecturesForStudent(req, res);
});

router.post('/getLectureForEditing', auth, async (req, res) => {
  await getLectureForEditing(req, res);
});

router.post('/getLectures', auth, async (req, res) => {
  await getLectures(req, res);
});

router.post('/editLecture', auth, async (req, res) => {
  await editLecture(req, res);
});

router.post('/changeLectureStatus', auth, async (req, res) => {
  await changeLectureStatus(req, res);
});

router.post('/deleteLecture', auth, async (req, res) => {
  await deleteLecture(req, res);
});

module.exports = router;
