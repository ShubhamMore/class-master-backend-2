const Course = require('../../models/course.model');
const findBranchName = require('../../functions/findBranchName');
const errorHandler = require('../../handler/error.handler');

const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.body._id);
    if (!course) {
      throw new Error('No Course Found');
    }

    const branch = await findBranchName(course.branch);
    course.branch = branch;

    res.status(200).send(course);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getCourse;
