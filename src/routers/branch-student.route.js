const express = require('express');

const auth = require('../middleware/auth');

const getBranchStudents = require('../controller/branch-student-controller/getBranchStudents');
const getBranchStudentNameIds = require('../controller/branch-student-controller/getBranchStudentNameIds');
const getBranchStudent = require('../controller/branch-student-controller/getBranchStudent');
const newBranchStudent = require('../controller/branch-student-controller/newBranchStudent');
const getBranchStudentForEditing = require('../controller/branch-student-controller/getBranchStudentForEditing');
const updateBranchStudent = require('../controller/branch-student-controller/updateBranchStudent');
const changeBranchStudentStatus = require('../controller/branch-student-controller/changeBranchStudentStatus');
const deleteBranchStudent = require('../controller/branch-student-controller/deleteBranchStudent');

const router = new express.Router();

router.post('/getBranchStudents', auth, async (req, res) => {
  await getBranchStudents(req, res);
});

router.post('/getBranchStudentNameIds', auth, async (req, res) => {
  await getBranchStudentNameIds(req, res);
});

router.post('/getBranchStudent', auth, async (req, res) => {
  await getBranchStudent(req, res);
});

router.post('/newBranchStudent', auth, async (req, res) => {
  await newBranchStudent(req, res);
});

router.post('/getBranchStudentForEditing', auth, async (req, res) => {
  await getBranchStudentForEditing(req, res);
});

router.post('/updateBranchStudent', auth, async (req, res) => {
  await updateBranchStudent(req, res);
});

router.post('/changeBranchStudentStatus', auth, async (req, res) => {
  await changeBranchStudentStatus(req, res);
});

router.post('/deleteBranchStudent', auth, async (req, res) => {
  await deleteBranchStudent(req, res);
});

module.exports = router;
