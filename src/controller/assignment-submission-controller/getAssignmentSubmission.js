const AssignmentSubmission = require('../../models/course-material.model');
const errorHandler = require('../../handler/error.handler');

const getAssignmentSubmission = async (req, res) => {
  try {
    const assignmentSubmission = await AssignmentSubmission.findById(req.body.id);

    if (!assignmentSubmission) {
      throw new Error('No Course Material');
    }

    res.status(200).send(assignmentSubmission);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAssignmentSubmission;
