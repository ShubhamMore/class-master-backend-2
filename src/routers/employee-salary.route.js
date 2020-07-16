const express = require('express');

const auth = require('../middleware/auth');

const newEmployeeSalary = require('../controller/employee-salary-controller/newEmployeeSalary');
const getEmployeeSalaries = require('../controller/employee-salary-controller/getEmployeeSalaries');
const getBranchEmployeeSalaries = require('../controller/employee-salary-controller/getBranchEmployeeSalaries');
const getEmployeeSalary = require('../controller/employee-salary-controller/getEmployeeSalary');
const changeEmployeeSalaryStatus = require('../controller/employee-salary-controller/changeEmployeeSalaryStatus');
const deleteEmployeeSalary = require('../controller/employee-salary-controller/deleteEmployeeSalary');

const router = new express.Router();

router.post('/newEmployeeSalary', auth, async (req, res) => {
  await newEmployeeSalary(req, res);
});

router.post('/getEmployeeSalaries', auth, async (req, res) => {
  await getEmployeeSalaries(req, res);
});

router.post('/getBranchEmployeeSalaries', auth, async (req, res) => {
  await getBranchEmployeeSalaries(req, res);
});

router.post('/getEmployeeSalary', auth, async (req, res) => {
  await getEmployeeSalary(req, res);
});

router.post('/changeEmployeeSalaryStatus', auth, async (req, res) => {
  await changeEmployeeSalaryStatus(req, res);
});

router.post('/deleteEmployeeSalary', auth, async (req, res) => {
  await deleteEmployeeSalary(req, res);
});

module.exports = router;
