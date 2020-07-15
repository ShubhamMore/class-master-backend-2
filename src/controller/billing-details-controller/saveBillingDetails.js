const InstituteBilling = require('../../models/institute-billing.model');
const errorHandler = require('../../handler/error.handler');

const saveBillingDetails = async (req, res) => {
  try {
    const billingDetails = await InstituteBilling.findOne({
      _id: req.body._id,
      branch: req.body.branch,
    });
    if (!billingDetails) {
      const receiptDetails = new InstituteBilling(req.body);
      await receiptDetails.save();
    } else {
      await InstituteBilling.findByIdAndUpdate(req.body._id, req.body);
    }
    res.status(200).send({ success: true });
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = saveBillingDetails;
