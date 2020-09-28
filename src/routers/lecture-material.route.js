const express = require('express');
const multer = require('multer');

const auth = require('../middleware/auth');

const storage = require('../uploads/lecture-material.upload');

const newLectureMaterials = require('../controller/lecture-material-controller/newLectureMaterials');
const getLectureMaterial = require('../controller/lecture-material-controller/getLectureMaterial');
const getLectureMaterials = require('../controller/lecture-material-controller/getLectureMaterials');
const getLectureMaterialsForStudent = require('../controller/lecture-material-controller/getLectureMaterialsForStudent');
const changeLectureMaterialStatus = require('../controller/lecture-material-controller/changeLectureMaterialStatus');
const deleteLectureMaterial = require('../controller/lecture-material-controller/deleteLectureMaterial');

const router = new express.Router();

router.post(
  '/newLectureMaterials',
  auth,
  multer({ storage: storage }).array('material'),
  async (req, res, next) => {
    await newLectureMaterials(req, res);
  }
);

router.post('/getLectureMaterial', auth, async (req, res) => {
  await getLectureMaterial(req, res);
});

router.post('/getLectureMaterials', auth, async (req, res) => {
  await getLectureMaterials(req, res);
});

router.post('/getLectureMaterialsForStudent', auth, async (req, res) => {
  await getLectureMaterialsForStudent(req, res);
});

router.post('/changeLectureMaterialStatus', auth, async (req, res) => {
  await changeLectureMaterialStatus(req, res);
});

router.post('/deleteLectureMaterial', auth, async (req, res) => {
  await deleteLectureMaterial(req, res);
});

module.exports = router;
