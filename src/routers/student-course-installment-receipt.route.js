const express = require('express');

const auth = require('../middleware/auth');

const newStudentCourseInstallmentReceipt = require('../controller/student-course-installment-receipt-controller/newStudentCourseInstallmentReceipt');
const getAllStudentCourseInstallmentReceipts = require('../controller/student-course-installment-receipt-controller/getAllStudentCourseInstallmentReceipts');
const getStudentCourseInstallmentReceipt = require('../controller/student-course-installment-receipt-controller/getStudentCourseInstallmentReceipt');
const changeStudentCourseInstallmentReceiptStatus = require('../controller/student-course-installment-receipt-controller/changeStudentCourseInstallmentReceiptStatus');
const deleteStudentCourseInstallmentReceipt = require('../controller/student-course-installment-receipt-controller/deleteStudentCourseInstallmentReceipt');

const router = new express.Router();

router.post('/newStudentCourseInstallmentReceipt', auth, async (req, res) => {
  await newStudentCourseInstallmentReceipt(req, res);
});

router.post('/getAllStudentCourseInstallmentReceipts', auth, async (req, res) => {
  await getAllStudentCourseInstallmentReceipts(req, res);
});

router.post('/getStudentCourseInstallmentReceipt', auth, async (req, res) => {
  await getStudentCourseInstallmentReceipt(req, res);
});

router.post('/changeStudentCourseInstallmentReceiptStatus', auth, async (req, res) => {
  await changeStudentCourseInstallmentReceiptStatus(req, res);
});

router.post('/deleteStudentCourseInstallmentReceipt', auth, async (req, res) => {
  await deleteStudentCourseInstallmentReceipt(req, res);
});

module.exports = router;
