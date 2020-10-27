const express = require('express');

const auth = require('../middleware/auth');

const getLecture = require('../controller/lecture-controller/getLecture');
const getLectures = require('../controller/lecture-controller/getLectures');
const getLecturesForStudent = require('../controller/lecture-controller/getLecturesForStudent');
const getUpcomingLecturesForEmployee = require('../controller/lecture-controller/getUpcomingLecturesForEmployee');

const router = new express.Router();

router.post('/getLecture', auth, async (req, res) => {
  await getLecture(req, res);
});

router.post('/getLectures', auth, async (req, res) => {
  await getLectures(req, res);
});

router.post('/getLecturesForStudent', auth, async (req, res) => {
  await getLecturesForStudent(req, res);
});

router.post('/getUpcomingLecturesForEmployee', auth, async (req, res) => {
  await getUpcomingLecturesForEmployee(req, res);
});

module.exports = router;
