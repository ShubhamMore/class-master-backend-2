const express = require('express');

const auth = require('../middleware/auth');

const saveAttendance = require('../controller/attendance-controller/getStudentsForAttendance');
const editAttendance = require('../controller/attendance-controller/getStudentsForAttendance');
const getStudentAttendance = require('../controller/attendance-controller/getStudentsForAttendance');
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

router.post('/getStudentAttendance', auth, async (req, res) => {
  await getStudentAttendance(req, res);
});

module.exports = router;
