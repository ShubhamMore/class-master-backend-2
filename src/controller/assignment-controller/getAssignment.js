const Assignment = require('../../models/assignment.model');
const errorHandler = require('../../handler/error.handler');

const getAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.body.id);
    if (!assignment) {
      throw new Error('No assignment Found');
    }

    res.status(200).send(assignment);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAssignment;
