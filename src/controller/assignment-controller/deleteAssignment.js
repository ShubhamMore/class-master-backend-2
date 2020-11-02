const Assignment = require('../../models/assignment.model');
const errorHandler = require('../../handler/error.handler');

const deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.body.id);

    if (!assignment) {
      throw new Error('No assignment Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteAssignment;
