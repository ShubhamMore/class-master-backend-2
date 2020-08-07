const Lead = require('../../models/lead.model');
const errorHandler = require('../../handler/error.handler');

const changeLeadStatus = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.body.id, { status: req.body.status });

    if (!lead) {
      throw new Error('No lead Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeLeadStatus;
