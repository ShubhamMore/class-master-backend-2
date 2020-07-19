const express = require('express');

const auth = require('../middleware/auth');

const newStudentCourseInstallment = require('../controller/student-course-installment-controller/newStudentCourseInstallment');
const getStudentCourseInstallments = require('../controller/student-course-installment-controller/getStudentCourseInstallments');
const getStudentCourseInstallment = require('../controller/student-course-installment-controller/getStudentCourseInstallment');
const getStudentCourseInstallmentForEditing = require('../controller/student-course-installment-controller/getStudentCourseInstallmentForEditing');
const updateStudentCourseInstallment = require('../controller/student-course-installment-controller/updateStudentCourseInstallment');
const changeStudentCourseInstallmentStatus = require('../controller/student-course-installment-controller/changeStudentCourseInstallmentStatus');
const deleteStudentCourseInstallment = require('../controller/student-course-installment-controller/deleteStudentCourseInstallment');

const router = new express.Router();

// Student Course Routes

router.post('/newStudentCourseInstallment', auth, async (req, res) => {
  await newStudentCourseInstallment(req, res);
});

router.post('/getStudentCourseInstallments', auth, async (req, res) => {
  await getStudentCourseInstallments(req, res);
});

router.post('/getStudentCourseInstallment', auth, async (req, res) => {
  await getStudentCourseInstallment(req, res);
});

router.post('/getStudentCourseInstallmentForEditing', auth, async (req, res) => {
  await getStudentCourseInstallmentForEditing(req, res);
});

router.post('/updateStudentCourseInstallment', auth, async (req, res) => {
  await updateStudentCourseInstallment(req, res);
});

router.post('/changeStudentCourseInstallmentStatus', auth, async (req, res) => {
  await changeStudentCourseInstallmentStatus(req, res);
});

router.post('/deleteStudentCourseInstallment', auth, async (req, res) => {
  await deleteStudentCourseInstallment(req, res);
});

module.exports = router;
