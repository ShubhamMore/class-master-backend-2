const AssignmentSubmission = require('../../models/assignment-submission.model');
const errorHandler = require('../../handler/error.handler');

const saveAssignmentSubmissionGrades = async (req, res) => {
  try {
    const assignmentSubmission = await AssignmentSubmission.findOne({
      assignment: req.body.assignment,
      student: req.user.imsMasterId,
    });

    res.status(200).send(assignmentSubmission);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveAssignmentSubmissionGrades;
