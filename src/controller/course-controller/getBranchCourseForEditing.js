const Course = require('../../models/course.model');
const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const getBranchCourseForEditing = async (req, res) => {
  try {
    const branch = await Branch.findById(req.body.branch);
    if (!branch) {
      throw new Error('No Branch Found');
    }

    const course = await Course.findById(req.body._id);
    if (!course) {
      throw new Error('No Course Found');
    }

    res.status(200).send(course);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchCourseForEditing;
