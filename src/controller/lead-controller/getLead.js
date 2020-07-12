const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const Lead = require('../../models/lead.model');
const errorHandler = require('../../handler/error.handler');

const findCourseTypeValue = require('../../functions/findCourseTypeValue');
const findBranchName = require('../../functions/findBranchName');

const getLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.body._id);

    if (!lead) {
      throw new Error('No lead Found');
    }

    res.status(200).send(lead);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getLead;
