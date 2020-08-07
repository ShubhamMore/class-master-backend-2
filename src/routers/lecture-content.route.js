const express = require('express');
const multer = require('multer');

const auth = require('../middleware/auth');

const storage = require('../uploads/file.upload');

const newLectureContents = require('../controller/lecture-content-controller/newLectureContents');
const getLectureContent = require('../controller/lecture-content-controller/getLectureContent');
const getLectureContents = require('../controller/lecture-content-controller/getLectureContents');
const getLectureContentsForStudent = require('../controller/lecture-content-controller/getLectureContentsForStudent');
const changeLectureContentStatus = require('../controller/lecture-content-controller/changeLectureContentStatus');
const deleteLectureContent = require('../controller/lecture-content-controller/deleteLectureContent');

const router = new express.Router();

router.post(
  '/newLectureContents',
  auth,
  multer({ storage: storage }).array('content'),
  async (req, res, next) => {
    await newLectureContents(req, res);
  }
);

router.post('/getLectureContent', auth, async (req, res) => {
  await getLectureContent(req, res);
});

router.post('/getLectureContents', auth, async (req, res) => {
  await getLectureContents(req, res);
});

router.post('/getLectureContentsForStudent', auth, async (req, res) => {
  await getLectureContentsForStudent(req, res);
});

router.post('/changeLectureContentStatus', auth, async (req, res) => {
  await changeLectureContentStatus(req, res);
});

router.post('/deleteLectureContent', auth, async (req, res) => {
  await deleteLectureContent(req, res);
});

module.exports = router;
