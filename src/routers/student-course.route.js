const express = require('express');

const auth = require('../middleware/auth');

const newStudentCourse = require('../controller/student-course-controller/newStudentCourse');
const getStudentCourses = require('../controller/student-course-controller/getStudentCourses');
const getStudentCourse = require('../controller/student-course-controller/getStudentCourse');
const getStudentCourseForEditing = require('../controller/student-course-controller/getStudentCourseForEditing');
const updateStudentCourse = require('../controller/student-course-controller/updateStudentCourse');
const changeStudentCourseStatus = require('../controller/student-course-controller/changeStudentCourseStatus');
const deleteStudentCourse = require('../controller/student-course-controller/deleteStudentCourse');

const router = new express.Router();

// Student Course Routes

router.post('/newStudentCourse', auth, async (req, res) => {
  await newStudentCourse(req, res);
});

router.post('/getStudentCourses', auth, async (req, res) => {
  await getStudentCourses(req, res);
});

router.post('/getStudentCourse', auth, async (req, res) => {
  await getStudentCourse(req, res);
});

router.post('/getStudentCourseForEditing', auth, async (req, res) => {
  await getStudentCourseForEditing(req, res);
});

router.post('/updateStudentCourse', auth, async (req, res) => {
  await updateStudentCourse(req, res);
});

router.post('/changeStudentCourseStatus', auth, async (req, res) => {
  await changeStudentCourseStatus(req, res);
});

router.post('/deleteStudentCourse', auth, async (req, res) => {
  await deleteStudentCourse(req, res);
});

module.exports = router;
