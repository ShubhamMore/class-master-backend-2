const AssignmentSubmission = require('../../models/course-material.model');
const errorHandler = require('../../handler/error.handler');

const getAssignmentSubmissions = async (req, res) => {
  try {
    const assignmentSubmissions = await AssignmentSubmission.aggregate(searchQuery);

    res.status(200).send(assignmentSubmissions);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAssignmentSubmissions;
