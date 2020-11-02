const Assignment = require('../../models/assignment.model');
const errorHandler = require('../../handler/error.handler');

const saveAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);

    await assignment.save();

    res.status(200).send(assignment);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveAssignment;
