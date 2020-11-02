const Assignment = require('../../models/assignment.model');
const errorHandler = require('../../handler/error.handler');

const changeAssignmentStatus = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.body.id, { status: req.body.status });

    if (!assignment) {
      throw new Error('No assignment Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeAssignmentStatus;
