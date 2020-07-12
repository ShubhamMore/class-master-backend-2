const express = require('express');

const auth = require('../middleware/auth');
const adminBranchAuth = require('../middleware/admin-branch-auth');

const saveLead = require('../controller/lead-controller/saveLead');
const getLeads = require('../controller/lead-controller/getLeads');
const getLead = require('../controller/lead-controller/getLead');
const getLeadForEditing = require('../controller/lead-controller/getLeadForEditing');
const changeLeadStatus = require('../controller/lead-controller/changeLeadStatus');
const editLead = require('../controller/lead-controller/editLead');
const deleteLead = require('../controller/lead-controller/deleteLead');

const router = new express.Router();

router.post('/saveLead', auth, adminBranchAuth, async (req, res) => {
  await saveLead(req, res);
});

router.post('/getLeads', auth, adminBranchAuth, async (req, res) => {
  await getLeads(req, res);
});

router.post('/getLead', auth, adminBranchAuth, async (req, res) => {
  await getLead(req, res);
});

router.post('/getLeadForEditing', auth, adminBranchAuth, async (req, res) => {
  await getLeadForEditing(req, res);
});

router.post('/changeLeadStatus', auth, adminBranchAuth, async (req, res) => {
  await changeLeadStatus(req, res);
});

router.post('/editLead', auth, adminBranchAuth, async (req, res) => {
  await editLead(req, res);
});

router.post('/deleteLead', auth, adminBranchAuth, async (req, res) => {
  await deleteLead(req, res);
});

module.exports = router;
