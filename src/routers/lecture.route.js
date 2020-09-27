const express = require('express');

const auth = require('../middleware/auth');

const getLecture = require('../controller/lecture-controller/getLecture');
const getLectures = require('../controller/lecture-controller/getLectures');

const router = new express.Router();

router.post('/getLecture', auth, async (req, res) => {
  await getLecture(req, res);
});

router.post('/getLectures', auth, async (req, res) => {
  await getLectures(req, res);
});

module.exports = router;
