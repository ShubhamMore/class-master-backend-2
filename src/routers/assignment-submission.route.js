const express = require('express');
const multer = require('multer');

const auth = require('../middleware/auth');

const storage = require('../uploads/assignment-submission.upload');

const submitAssignment = require('../controller/assignment-submission-controller/submitAssignment');
const getAssignmentSubmissions = require('../controller/assignment-submission-controller/getAssignmentSubmissions');
const getAssignmentSubmission = require('../controller/assignment-submission-controller/getAssignmentSubmission');
const getSubmissionOfAssignment = require('../controller/assignment-submission-controller/getSubmissionOfAssignment');
const updateAssignmentSubmission = require('../controller/assignment-submission-controller/updateAssignmentSubmission');
const deleteAssignmentSubmission = require('../controller/assignment-submission-controller/deleteAssignmentSubmission');

const router = new express.Router();

router.post(
  '/submitAssignment',
  auth,
  multer({ storage: storage }).single('assignmentSubmission'),
  async (req, res) => {
    await submitAssignment(req, res);
  }
);

router.post('/getAssignmentSubmissions', auth, async (req, res) => {
  await getAssignmentSubmissions(req, res);
});

router.post('/getAssignmentSubmission', auth, async (req, res) => {
  await getAssignmentSubmission(req, res);
});

router.post('/getSubmissionOfAssignment', auth, async (req, res) => {
  await getSubmissionOfAssignment(req, res);
});

router.post(
  '/updateAssignmentSubmission',
  auth,
  multer({ storage: storage }).single('assignmentSubmission'),
  async (req, res) => {
    await updateAssignmentSubmission(req, res);
  }
);

router.post('/deleteAssignmentSubmission', auth, async (req, res) => {
  await deleteAssignmentSubmission(req, res);
});

module.exports = router;
