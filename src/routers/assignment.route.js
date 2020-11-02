const express = require('express');

const auth = require('../middleware/auth');

const saveAssignment = require('../controller/assignment-controller/newAssignment');
const getAssignments = require('../controller/assignment-controller/getAssignments');
const getAssignment = require('../controller/assignment-controller/getAssignment');
const changeAssignmentStatus = require('../controller/assignment-controller/changeAssignmentStatus');
const updateAssignment = require('../controller/assignment-controller/updateAssignment');
const deleteAssignment = require('../controller/assignment-controller/deleteAssignment');

const router = new express.Router();

router.post('/saveAssignment', auth, async (req, res) => {
  await saveAssignment(req, res);
});

router.post('/getAssignments', auth, async (req, res) => {
  await getAssignments(req, res);
});

router.post('/getAssignment', auth, async (req, res) => {
  await getAssignment(req, res);
});

router.post('/changeAssignmentStatus', auth, async (req, res) => {
  await changeAssignmentStatus(req, res);
});

router.post('/updateAssignment', auth, async (req, res) => {
  await updateAssignment(req, res);
});

router.post('/deleteAssignment', auth, async (req, res) => {
  await deleteAssignment(req, res);
});

module.exports = router;
