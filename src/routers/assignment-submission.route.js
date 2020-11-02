const express = require('express');

const auth = require('../middleware/auth');

const submitAssignment = require('../controller/assignment-submission-controller/submitAssignment');
const getAssignmentSubmissions = require('../controller/assignment-submission-controller/getAssignmentSubmissions');
const getAssignmentSubmission = require('../controller/assignment-submission-controller/getAssignmentSubmission');
const updateAssignmentSubmission = require('../controller/assignment-submission-controller/updateAssignmentSubmission');
const deleteAssignmentSubmission = require('../controller/assignment-submission-controller/deleteAssignmentSubmission');

const router = new express.Router();

router.post('/submitAssignment', auth, async (req, res) => {
  await submitAssignment(req, res);
});

router.post('/getAssignmentSubmissions', auth, async (req, res) => {
  await getAssignmentSubmissions(req, res);
});

router.post('/getAssignmentSubmission', auth, async (req, res) => {
  await getAssignmentSubmission(req, res);
});

router.post('/updateAssignmentSubmission', auth, async (req, res) => {
  await updateAssignmentSubmission(req, res);
});

router.post('/deleteAssignmentSubmission', auth, async (req, res) => {
  await deleteAssignmentSubmission(req, res);
});

module.exports = router;
