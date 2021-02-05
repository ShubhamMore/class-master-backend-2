const express = require('express');

const auth = require('../middleware/auth');

const newSMSPackage = require('../controller/sms-package-controller/newSmsPackage');
const updateSMSPackage = require('../controller/sms-package-controller/updateSmsPackage');
const getSMSPackages = require('../controller/sms-package-controller/getSmsPackages');
const getSMSPackage = require('../controller/sms-package-controller/getSmsPackage');
const changeSMSPackageStatus = require('../controller/sms-package-controller/changeSmsPackageStatus');
const deleteSMSPackage = require('../controller/sms-package-controller/deleteSMSPackage');

const router = new express.Router();

router.post('/newSMSPackage', auth, async (req, res) => {
  await newSMSPackage(req, res);
});

router.post('/updateSMSPackage', auth, async (req, res) => {
  await updateSMSPackage(req, res);
});

router.post('/getSMSPackages', auth, async (req, res) => {
  await getSMSPackages(req, res);
});

router.post('/getSMSPackage', auth, async (req, res) => {
  await getSMSPackage(req, res);
});

router.post('/changeSMSPackageStatus', auth, async (req, res) => {
  await changeSMSPackageStatus(req, res);
});

router.post('/deleteSMSPackage', auth, async (req, res) => {
  await deleteSMSPackage(req, res);
});

module.exports = router;
