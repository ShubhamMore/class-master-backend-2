const express = require('express');

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/admin-auth');

const newCoupon = require('../controller/coupon-controller/newCoupon');
const getCoupons = require('../controller/coupon-controller/getCoupons');
const getCoupon = require('../controller/coupon-controller/getCoupon');
const updateCoupon = require('../controller/coupon-controller/updateCoupon');
const deleteCoupon = require('../controller/coupon-controller/deleteCoupon');
const changeCouponStatus = require('../controller/coupon-controller/changeCouponStatus');
const validateCoupon = require('../controller/coupon-controller/validateCoupon');
const checkCoupon = require('../controller/coupon-controller/checkCoupon');

const router = new express.Router();

router.post('/newCoupon', auth, adminAuth, async (req, res) => {
  await newCoupon(req, res);
});

router.post('/getCoupons', auth, adminAuth, async (req, res) => {
  await getCoupons(req, res);
});

router.post('/getCoupon', auth, adminAuth, async (req, res) => {
  await getCoupon(req, res);
});

router.post('/getCouponForEditing', auth, adminAuth, async (req, res) => {
  await getCouponForEditing(req, res);
});

router.post('/updateCoupon', auth, adminAuth, async (req, res) => {
  await updateCoupon(req, res);
});

router.post('/deleteCoupon', auth, adminAuth, async (req, res) => {
  await deleteCoupon(req, res);
});

router.post('/changeCouponStatus', auth, adminAuth, async (req, res) => {
  await changeCouponStatus(req, res);
});

router.post('/validateCoupon', auth, async (req, res) => {
  await validateCoupon(req, res);
});

router.post('/checkCoupon', auth, adminAuth, async (req, res) => {
  await checkCoupon(req, res);
});

module.exports = router;
