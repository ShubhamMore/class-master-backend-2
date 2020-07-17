const express = require('express');

const auth = require('../middleware/auth');

const newDiscountAndOffer = require('../controller/discount-and-offer-controller/newDiscountAndOffer');
const getDiscountAndOffers = require('../controller/discount-and-offer-controller/getDiscountAndOffers');
const getDiscountAndOffersForStudent = require('../controller/discount-and-offer-controller/getDiscountAndOffersForStudent');
const getDiscountAndOffer = require('../controller/discount-and-offer-controller/getDiscountAndOffer');
const getDiscountAndOfferForEditing = require('../controller/discount-and-offer-controller/getDiscountAndOfferForEditing');
const CheckDiscountAndOffer = require('../controller/discount-and-offer-controller/CheckDiscountAndOffer');
const changeDiscountAndOfferStatus = require('../controller/discount-and-offer-controller/changeDiscountAndOfferStatus');
const updateDiscountAndOffer = require('../controller/discount-and-offer-controller/updateDiscountAndOffer');
const deleteDiscountAndOffer = require('../controller/discount-and-offer-controller/deleteDiscountAndOffer');

const router = new express.Router();

router.post('/newDiscountAndOffer', auth, async (req, res) => {
  await newDiscountAndOffer(req, res);
});

router.post('/getDiscountAndOffers', auth, async (req, res) => {
  await getDiscountAndOffers(req, res);
});

router.post('/getDiscountAndOffersForStudent', auth, async (req, res) => {
  await getDiscountAndOffersForStudent(req, res);
});

router.post('/getDiscountAndOffer', auth, async (req, res) => {
  await getDiscountAndOffer(req, res);
});

router.post('/getDiscountAndOfferForEditing', auth, async (req, res) => {
  await getDiscountAndOfferForEditing(req, res);
});

router.post('/CheckDiscountAndOffer', auth, async (req, res) => {
  await CheckDiscountAndOffer(req, res);
});

router.post('/changeDiscountAndOfferStatus', auth, async (req, res) => {
  await changeDiscountAndOfferStatus(req, res);
});

router.post('/updateDiscountAndOffer', auth, async (req, res) => {
  await updateDiscountAndOffer(req, res);
});

router.post('/deleteDiscountAndOffer', auth, async (req, res) => {
  await deleteDiscountAndOffer(req, res);
});

module.exports = router;
