const express = require('express');

const auth = require('../middleware/auth');

const saveBudget = require('../controller/budget-controller/saveBudget');
const getBudgetToShow = require('../controller/budget-controller/getBudgetToShow');
const getBudget = require('../controller/budget-controller/getBudget');
const getBudgetForBranch = require('../controller/budget-controller/getBudgetForBranch');
const getBudgetSummery = require('../controller/budget-controller/getBudgetSummery');
const getBudgetSummeryForBranch = require('../controller/budget-controller/getBudgetSummeryForBranch');
const getAdminBudgetSummeryByYear = require('../controller/budget-controller/getAdminBudgetSummeryByYear');
const deleteBudget = require('../controller/budget-controller/deleteBudget');

const router = new express.Router();

router.post('/saveBudget', auth, async (req, res) => {
  await saveBudget(req, res);
});

router.post('/getBudgetToShow', auth, async (req, res) => {
  await getBudgetToShow(req, res);
});

router.post('/getBudget', auth, async (req, res) => {
  await getBudget(req, res);
});

router.post('/getBudgetForBranch', auth, async (req, res) => {
  await getBudgetForBranch(req, res);
});

router.post('/getBudgetSummery', auth, async (req, res) => {
  await getBudgetSummery(req, res);
});

router.post('/getBudgetSummeryForBranch', auth, branchAuth, async (req, res) => {
  await getBudgetSummeryForBranch(req, res);
});

router.post('/getAdminBudgetSummeryByYear', auth, async (req, res) => {
  await getAdminBudgetSummeryByYear(req, res);
});

router.post('/deleteBudget', auth, async (req, res) => {
  await deleteBudget(req, res);
});

module.exports = router;
