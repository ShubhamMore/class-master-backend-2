const express = require('express');

const auth = require('../middleware/auth');

const newStoragePackage = require('../controller/storage-package-controller/newStoragePackage');
const updateStoragePackage = require('../controller/storage-package-controller/updateStoragePackage');
const getStoragePackages = require('../controller/storage-package-controller/getStoragePackages');
const getStoragePackage = require('../controller/storage-package-controller/getStoragePackage');
const changeStoragePackageStatus = require('../controller/storage-package-controller/changeStoragePackageStatus');
const deleteStoragePackage = require('../controller/storage-package-controller/deleteStoragePackage');

const router = new express.Router();

router.post('/newStoragePackage', auth, async (req, res) => {
  await newStoragePackage(req, res);
});

router.post('/updateStoragePackage', auth, async (req, res) => {
  await updateStoragePackage(req, res);
});

router.post('/getStoragePackages', auth, async (req, res) => {
  await getStoragePackages(req, res);
});

router.post('/getStoragePackage', auth, async (req, res) => {
  await getStoragePackage(req, res);
});

router.post('/changeStoragePackageStatus', auth, async (req, res) => {
  await changeStoragePackageStatus(req, res);
});

router.post('/deleteStoragePackage', auth, async (req, res) => {
  await deleteStoragePackage(req, res);
});

module.exports = router;
