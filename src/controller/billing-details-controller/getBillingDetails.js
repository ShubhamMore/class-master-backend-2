const InstituteBilling = require('../../models/institute-billing.model');
const errorHandler = require('../../handler/error.handler');

const getBillingDetails = async (req, res) => {
  try {
    const billingDetails = await InstituteBilling.findOne({
      branch: req.body.branch,
    });
    res.status(200).send(billingDetails);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBillingDetails;
