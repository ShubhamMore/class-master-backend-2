const express = require('express');

const auth = require('../middleware/auth');

const generateInstituteOrder = require('../controller/institute-order-controller/generateInstituteOrder');
const deleteInstituteOrder = require('../controller/institute-order-controller/deleteInstituteOrder');

const router = new express.Router();

router.post('/generateInstituteOrder', auth, async (req, res) => {
  await generateInstituteOrder(req, res);
});

router.post('/deleteInstituteOrder', auth, async (req, res) => {
  await deleteInstituteOrder(req, res);
});

module.exports = router;
