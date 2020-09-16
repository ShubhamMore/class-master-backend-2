const express = require('express');

const auth = require('../middleware/auth');

const newEmployee = require('../controller/employee-controller/newEmployee');
const getEmployees = require('../controller/employee-controller/getEmployees');
const getEmployee = require('../controller/employee-controller/getEmployee');
const getEmployeeByIMSId = require('../controller/employee-controller/getEmployeeByIMSId');
const searchEmployee = require('../controller/employee-controller/searchEmployee');
const getEmployeeForEditing = require('../controller/employee-controller/getEmployeeForEditing');
const updateEmployee = require('../controller/employee-controller/updateEmployee');
const changeEmployeeStatus = require('../controller/employee-controller/changeEmployeeStatus');
const deleteEmployee = require('../controller/employee-controller/deleteEmployee');

const router = new express.Router();

// Employee Routes

router.post('/newEmployee', auth, async (req, res) => {
  await newEmployee(req, res);
});

router.post('/getEmployees', auth, async (req, res) => {
  await getEmployees(req, res);
});

router.post('/getEmployee', auth, async (req, res) => {
  await getEmployee(req, res);
});

router.post('/getEmployeeByIMSId', auth, async (req, res) => {
  await getEmployeeByIMSId(req, res);
});

router.post('/searchEmployee', auth, async (req, res) => {
  await searchEmployee(req, res);
});

router.post('/getEmployeeForEditing', auth, async (req, res) => {
  await getEmployeeForEditing(req, res);
});

router.post('/updateEmployee', auth, async (req, res) => {
  await updateEmployee(req, res);
});

router.post('/changeEmployeeStatus', auth, async (req, res) => {
  await changeEmployeeStatus(req, res);
});

router.post('/deleteEmployee', auth, async (req, res) => {
  await deleteEmployee(req, res);
});

module.exports = router;
