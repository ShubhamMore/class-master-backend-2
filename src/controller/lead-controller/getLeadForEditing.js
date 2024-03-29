const Lead = require('../../models/lead.model');
const errorHandler = require('../../handler/error.handler');

const getLeadForEditing = async (req, res) => {
  try {
    const lead = await Lead.findById(req.body.id);

    if (!lead) {
      throw new Error('No lead Found');
    }

    res.status(200).send(lead);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLeadForEditing;
