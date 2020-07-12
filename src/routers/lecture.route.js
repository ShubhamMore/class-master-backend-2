const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');
const branchAuth = require('../middleware/branch-auth');
const staffAuth = require('../middleware/staff-auth');
const adminBranchStaffAuth = require('../middleware/admin-branch-staff-auth');

const newLecture = require('../controller/lecture-controller/newLecture');
const getLecture = require('../controller/lecture-controller/getLecture');
const getLecturesForStudent = require('../controller/lecture-controller/getLecturesForStudent');
const getLectureForEditing = require('../controller/lecture-controller/getLectureForEditing');
const getBranchLectureForEditing = require('../controller/lecture-controller/getBranchLectureForEditing');
const getStaffLectureForEditing = require('../controller/lecture-controller/getStaffLectureForEditing');
const getLectures = require('../controller/lecture-controller/getLectures');
const editLecture = require('../controller/lecture-controller/editLecture');
const changeLectureStatus = require('../controller/lecture-controller/changeLectureStatus');
const deleteLecture = require('../controller/lecture-controller/deleteLecture');

const router = new express.Router();

router.post('/newLecture', auth, adminBranchStaffAuth, async (req, res) => {
  await newLecture(req, res);
});

router.post('/getLecture', auth, adminBranchStaffAuth, async (req, res) => {
  await getLecture(req, res);
});

router.post('/getLecturesForStudent', auth, async (req, res) => {
  await getLecturesForStudent(req, res);
});

router.post('/getLectureForEditing', auth, adminAuth, async (req, res) => {
  await getLectureForEditing(req, res);
});

router.post('/getBranchLectureForEditing', auth, branchAuth, async (req, res) => {
  await getBranchLectureForEditing(req, res);
});

router.post('/getStaffLectureForEditing', auth, staffAuth, async (req, res) => {
  await getStaffLectureForEditing(req, res);
});

router.post('/getLectures', auth, adminBranchStaffAuth, async (req, res) => {
  await getLectures(req, res);
});

router.post('/editLecture', auth, adminBranchStaffAuth, async (req, res) => {
  await editLecture(req, res);
});

router.post('/changeLectureStatus', auth, adminBranchStaffAuth, async (req, res) => {
  await changeLectureStatus(req, res);
});

router.post('/deleteLecture', auth, adminBranchStaffAuth, async (req, res) => {
  await deleteLecture(req, res);
});

module.exports = router;
