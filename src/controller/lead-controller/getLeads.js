const Lead = require('../../models/lead.model');
const errorHandler = require('../../handler/error.handler');

const getLeads = async (req, res) => {
  try {
    const searchQuery = { course: req.body.course };

    if (req.body.leadType === '1') {
      searchQuery.status = '0';
    } else if (req.body.leadType === '0') {
      searchQuery.$or = [{ status: '1' }, { status: '2' }];
    } else {
      throw new Error('Lead Type is Required');
    }

    const lead = await Lead.find(searchQuery);

    res.status(200).send(lead);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLeads;
