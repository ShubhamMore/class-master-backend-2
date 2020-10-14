const express = require('express');

const auth = require('../middleware/auth');

const saveBudget = require('../controller/budget-controller/saveBudget');
const getBudget = require('../controller/budget-controller/getBudget');
const getBudgetForBranch = require('../controller/budget-controller/getBudgetForBranch');
const getBudgetForBranchDashboard = require('../controller/budget-controller/getBudgetForBranchDashboard');
const getBudgetSummery = require('../controller/budget-controller/getBudgetSummery');
const deleteBudget = require('../controller/budget-controller/deleteBudget');

const router = new express.Router();

router.post('/saveBudget', auth, async (req, res) => {
  await saveBudget(req, res);
});

router.post('/getBudget', auth, async (req, res) => {
  await getBudget(req, res);
});

router.post('/getBudgetForBranch', auth, async (req, res) => {
  await getBudgetForBranch(req, res);
});

router.post('/getBudgetForBranchDashboard', auth, async (req, res) => {
  await getBudgetForBranchDashboard(req, res);
});

router.post('/getBudgetSummery', auth, async (req, res) => {
  await getBudgetSummery(req, res);
});

router.post('/deleteBudget', auth, async (req, res) => {
  await deleteBudget(req, res);
});

module.exports = router;
