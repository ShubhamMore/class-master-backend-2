const Lead = require('../../models/lead.model');
const errorHandler = require('../../handler/error.handler');

const getLeads = async (req, res) => {
  try {
    const searchQuery = { branch: req.body.branch };

    if (req.body.leadType === 'active') {
      searchQuery.status = 'open';
    } else if (req.body.leadType === 'inactive') {
      searchQuery.$or = [{ status: 'lost' }, { status: 'won' }];
    } else {
      throw new Error('Lead Type is Required');
    }

    if (req.body.category !== '') {
      searchQuery.category = req.body.category;
    }

    if (req.body.course !== '') {
      searchQuery.course = req.body.course;
    }

    const lead = await Lead.find(searchQuery);

    res.status(200).send(lead);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLeads;
