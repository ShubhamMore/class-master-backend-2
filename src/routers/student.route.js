const express = require('express');

const auth = require('../middleware/auth');

const newStudent = require('../controller/student-controller/newStudent');
const getStudents = require('../controller/student-controller/getStudents');
const getStudent = require('../controller/student-controller/getStudent');
const getStudentByImsId = require('../controller/student-controller/getStudentByImsId');
const searchStudent = require('../controller/student-controller/searchStudent');
const getStudentForEditing = require('../controller/student-controller/getStudentForEditing');
const updateStudent = require('../controller/student-controller/updateStudent');
const changeStudentStatus = require('../controller/student-controller/changeStudentStatus');
const deleteStudent = require('../controller/student-controller/deleteStudent');

const router = new express.Router();

// Student Routes

router.post('/newStudent', auth, async (req, res) => {
  await newStudent(req, res);
});

router.post('/getStudents', auth, async (req, res) => {
  await getStudents(req, res);
});

router.post('/getStudent', auth, async (req, res) => {
  await getStudent(req, res);
});

router.post('/getStudentByImsId', auth, async (req, res) => {
  await getStudentByImsId(req, res);
});

router.post('/searchStudent', auth, async (req, res) => {
  await searchStudent(req, res);
});

router.post('/getStudentForEditing', auth, async (req, res) => {
  await getStudentForEditing(req, res);
});

router.post('/updateStudent', auth, async (req, res) => {
  await updateStudent(req, res);
});

router.post('/changeStudentStatus', auth, async (req, res) => {
  await changeStudentStatus(req, res);
});

router.post('/deleteStudent', auth, async (req, res) => {
  await deleteStudent(req, res);
});

module.exports = router;
