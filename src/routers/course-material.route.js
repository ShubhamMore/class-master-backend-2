const express = require('express');
const multer = require('multer');

const auth = require('../middleware/auth');

const storage = require('../uploads/file.upload');

const newCourseMaterials = require('../controller/course-material-controller/newCourseMaterials');
const getCourseMaterial = require('../controller/course-material-controller/getCourseMaterial');
const getCourseMaterials = require('../controller/course-material-controller/getCourseMaterials');
const getCourseMaterialsForStudent = require('../controller/course-material-controller/getCourseMaterialsForStudent');
const changeCourseMaterialStatus = require('../controller/course-material-controller/changeCourseMaterialStatus');
const deleteCourseMaterial = require('../controller/course-material-controller/deleteCourseMaterial');

const router = new express.Router();

router.post(
  '/newCourseMaterials',
  auth,
  multer({ storage: storage }).array('material'),
  async (req, res, next) => {
    await newCourseMaterials(req, res);
  }
);

router.post('/getCourseMaterial', auth, async (req, res) => {
  await getCourseMaterial(req, res);
});

router.post('/getCourseMaterials', auth, async (req, res) => {
  await getCourseMaterials(req, res);
});

router.post('/getCourseMaterialsForStudent', auth, async (req, res) => {
  await getCourseMaterialsForStudent(req, res);
});

router.post('/changeCourseMaterialStatus', auth, async (req, res) => {
  await changeCourseMaterialStatus(req, res);
});

router.post('/deleteCourseMaterial', auth, async (req, res) => {
  await deleteCourseMaterial(req, res);
});

module.exports = router;
