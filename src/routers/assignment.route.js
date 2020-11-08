const express = require('express');
const multer = require('multer');

const auth = require('../middleware/auth');

const storage = require('../uploads/assignment.upload');

const saveAssignment = require('../controller/assignment-controller/newAssignment');
const getAssignments = require('../controller/assignment-controller/getAssignments');
const getAssignmentsForStudent = require('../controller/assignment-controller/getAssignmentsForStudent');
const getAssignment = require('../controller/assignment-controller/getAssignment');
const changeAssignmentStatus = require('../controller/assignment-controller/changeAssignmentStatus');
const updateAssignment = require('../controller/assignment-controller/updateAssignment');
const deleteAssignmentAttachment = require('../controller/assignment-controller/deleteAssignmentAttachment');
const deleteAssignment = require('../controller/assignment-controller/deleteAssignment');

const router = new express.Router();

router.post(
  '/saveAssignment',
  auth,
  multer({ storage: storage }).single('assignment'),
  async (req, res) => {
    await saveAssignment(req, res);
  }
);

router.post('/getAssignments', auth, async (req, res) => {
  await getAssignments(req, res);
});

router.post('/getAssignmentsForStudent', auth, async (req, res) => {
  await getAssignmentsForStudent(req, res);
});

router.post('/getAssignment', auth, async (req, res) => {
  await getAssignment(req, res);
});

router.post('/changeAssignmentStatus', auth, async (req, res) => {
  await changeAssignmentStatus(req, res);
});

router.post(
  '/updateAssignment',
  auth,
  multer({ storage: storage }).single('assignment'),
  async (req, res) => {
    await updateAssignment(req, res);
  }
);

router.post('/deleteAssignmentAttachment', auth, async (req, res) => {
  await deleteAssignmentAttachment(req, res);
});

router.post('/deleteAssignment', auth, async (req, res) => {
  await deleteAssignment(req, res);
});

module.exports = router;
