const express = require('express');

const auth = require('../middleware/auth');
const adminBranchStaffAuth = require('../middleware/admin-branch-staff-auth');

const newReceipt = require('../controller/receipt-controller/newReceipt');
const getAllReceipts = require('../controller/receipt-controller/getAllReceipts');
const getAllReceiptsForStudent = require('../controller/receipt-controller/getAllReceiptsForStudent');
const getReceipt = require('../controller/receipt-controller/getReceipt');
const changeReceiptStatus = require('../controller/receipt-controller/changeReceiptStatus');
const deleteReceipt = require('../controller/receipt-controller/deleteReceipt');

const router = new express.Router();

router.post('/newReceipt', auth, adminBranchStaffAuth, async (req, res) => {
  await newReceipt(req, res);
});

router.post('/getAllReceipts', auth, adminBranchStaffAuth, async (req, res) => {
  await getAllReceipts(req, res);
});

router.post('/getAllReceiptsForStudent', auth, async (req, res) => {
  await getAllReceiptsForStudent(req, res);
});

router.post('/getReceipt', auth, async (req, res) => {
  await getReceipt(req, res);
});

router.post('/changeReceiptStatus', auth, adminBranchStaffAuth, async (req, res) => {
  await changeReceiptStatus(req, res);
});

router.post('/deleteReceipt', auth, adminBranchStaffAuth, async (req, res) => {
  await deleteReceipt(req, res);
});

module.exports = router;
