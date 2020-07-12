const Lead = require('../../models/lead.model');
const errorHandler = require('../../handler/error.handler');

const saveLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);

    await lead.save();

    res.status(200).send(lead);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveLead;
