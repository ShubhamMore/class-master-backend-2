const InstituteBilling = require('../../models/institute-billing.model');
const errorHandler = require('../../handler/error.handler');

const saveBillingDetails = async (req, res) => {
  try {
    const billingDetails = await InstituteBilling.findOneAndUpdate(
      { classMasterId: req.user.classMasterId },
      req.body
    );
    if (!billingDetails) {
      throw new Error('Institute Billing Details Not Found');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveBillingDetails;
