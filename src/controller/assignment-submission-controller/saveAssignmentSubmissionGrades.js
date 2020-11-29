const AssignmentSubmission = require('../../models/assignment-submission.model');

const errorHandler = require('../../handler/error.handler');

const saveAssignmentSubmissionGrades = async (req, res) => {
  try {
    const assignmentSubmission = await AssignmentSubmission.findByIdAndUpdate(
      req.body._id,
      req.body
    );

    if (!assignmentSubmission) {
      throw new Error('Assignment Submission Not Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveAssignmentSubmissionGrades;
