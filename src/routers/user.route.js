const express = require('express');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');

const getUsers = require('../controller/user-controller/getUsers');
const changeUserStatus = require('../controller/user-controller/changeUserStatus');
const newUser = require('../controller/user-controller/newUser');
const checkUser = require('../controller/user-controller/checkUser');
const login = require('../controller/user-controller/login');
const autoLogin = require('../controller/user-controller/autoLogin');
const forgotPassword = require('../controller/user-controller/forgotPassword');
const validateToken = require('../controller/user-controller/validateToken');
const resetPassword = require('../controller/user-controller/resetPassword');
const changePassword = require('../controller/user-controller/changePassword');
const logout = require('../controller/user-controller/logout');
const logoutAll = require('../controller/user-controller/logoutAll');

const router = new express.Router();

router.post('/getUsers', auth, adminAuth, async (req, res) => {
  await getUsers(req, res);
});

router.post('/changeUserStatus', auth, adminAuth, async (req, res) => {
  await changeUserStatus(req, res);
});

router.post('/newUser', async (req, res) => {
  await newUser(req, res);
});

router.post('/checkUser', async (req, res) => {
  await checkUser(req, res);
});

router.post('/login', async (req, res) => {
  await login(req, res);
});

router.post('/autoLogin', auth, async (req, res) => {
  await autoLogin(req, res);
});

router.post('/forgotPassword', async (req, res) => {
  await forgotPassword(req, res);
});

router.post('/validateToken', async (req, res) => {
  await validateToken(req, res);
});

router.post('/resetPassword', async (req, res) => {
  await resetPassword(req, res);
});

router.post('/changePassword', auth, async (req, res) => {
  await changePassword(req, res);
});

router.post('/logout', auth, async (req, res) => {
  await logout(req, res);
});

router.post('/logoutAll', auth, async (req, res) => {
  await logoutAll(req, res);
});

module.exports = router;
