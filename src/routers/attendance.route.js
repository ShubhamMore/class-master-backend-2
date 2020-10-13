const express = require('express');

const auth = require('../middleware/auth');

const saveAttendance = require('../controller/attendance-controller/saveAttendance');
const editAttendance = require('../controller/attendance-controller/getStudentsForAttendance');
const getStudentCourseAttendance = require('../controller/attendance-controller/getStudentCourseAttendance');
const getStudentsForAttendance = require('../controller/attendance-controller/getStudentsForAttendance');

const router = new express.Router();

router.post('/getStudentsForAttendance', auth, async (req, res) => {
  await getStudentsForAttendance(req, res);
});

router.post('/saveAttendance', auth, async (req, res) => {
  await saveAttendance(req, res);
});

router.post('/editAttendance', auth, async (req, res) => {
  await editAttendance(req, res);
});

router.post('/getStudentCourseAttendance', auth, async (req, res) => {
  await getStudentCourseAttendance(req, res);
});

module.exports = router;
