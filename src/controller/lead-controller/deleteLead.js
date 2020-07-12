const Lead = require('../../models/lead.model');
const errorHandler = require('../../handler/error.handler');

const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndRemove(req.body._id);

    if (!lead) {
      throw new Error('No lead Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteLead;
