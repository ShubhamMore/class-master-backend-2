const express = require('express');

const auth = require('../middleware/auth');

const getInstituteTransaction = require('../controller/transaction-controller/getInstituteTransaction');
const getInstituteTransactions = require('../controller/transaction-controller/getInstituteTransactions');
const getStudentTransaction = require('../controller/transaction-controller/getStudentTransaction');
const getStudentTransactions = require('../controller/transaction-controller/getStudentTransactions');

const router = new express.Router();

router.post('/getInstituteTransaction', auth, async (req, res) => {
  await getInstituteTransaction(req, res);
});

router.post('/getInstituteTransactions', auth, async (req, res) => {
  await getInstituteTransactions(req, res);
});

router.post('/getStudentTransaction', auth, async (req, res) => {
  await getStudentTransaction(req, res);
});

router.post('/getStudentTransactions', auth, async (req, res) => {
  await getStudentTransactions(req, res);
});

module.exports = router;
