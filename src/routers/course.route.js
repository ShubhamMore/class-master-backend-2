const express = require('express');

const auth = require('../middleware/auth');

const newCourse = require('../controller/course-controller/newCourse');

const getCoursesByBranch = require('../controller/course-controller/getCoursesByBranch');

const getCourse = require('../controller/course-controller/getCourse');

const getCourseForEditing = require('../controller/course-controller/getCourseForEditing');

const updateCourse = require('../controller/course-controller/editCourse');

const changeCourseStatus = require('../controller/course-controller/changeCourseStatus');

const router = new express.Router();

router.post('/newCourse', auth, async (req, res) => {
  await newCourse(req, res);
});

router.post('/getCoursesByBranch', auth, async (req, res) => {
  await getCoursesByBranch(req, res);
});

router.post('/getCourse', auth, async (req, res) => {
  await getCourse(req, res);
});

router.post('/getCourseForEditing', auth, async (req, res) => {
  await getCourseForEditing(req, res);
});

router.post('/updateCourse', auth, async (req, res) => {
  await updateCourse(req, res);
});

router.post('/changeCourseStatus', auth, async (req, res) => {
  await changeCourseStatus(req, res);
});

module.exports = router;
