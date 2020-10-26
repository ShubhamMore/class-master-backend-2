const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');

const activateInstituteBranch = require('../controller/institute-controller/activateInstituteBranch');
const deactivateInstituteBranch = require('../controller/institute-controller/deactivateInstituteBranch');
const getInstituteBranch = require('../controller/institute-controller/getInstituteBranch');
const getInstituteBranchHistory = require('../controller/institute-controller/getInstituteBranchHistory');
const getInstituteBranches = require('../controller/institute-controller/getInstituteBranches');
const getInstituteTransactionHistory = require('../controller/institute-controller/getInstituteTransactionHistory');
const getInstitutes = require('../controller/institute-controller/getInstitutes');

const router = new express.Router();

router.post('/activateInstituteBranch', auth, adminAuth, async (req, res) => {
  await activateInstituteBranch(req, res);
});

router.post('/deactivateInstituteBranch', auth, adminAuth, async (req, res) => {
  await deactivateInstituteBranch(req, res);
});

router.post('/getInstituteBranch', auth, adminAuth, async (req, res) => {
  await getInstituteBranch(req, res);
});

router.post('/getInstituteBranchHistory', auth, adminAuth, async (req, res) => {
  await getInstituteBranchHistory(req, res);
});

router.post('/getInstituteBranches', auth, adminAuth, async (req, res) => {
  await getInstituteBranches(req, res);
});

router.post('/getInstituteTransactionHistory', auth, adminAuth, async (req, res) => {
  await getInstituteTransactionHistory(req, res);
});

router.post('/getInstitutes', auth, adminAuth, async (req, res) => {
  await getInstitutes(req, res);
});

module.exports = router;
