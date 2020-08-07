const Course = require('../../models/course.model');
const errorHandler = require('../../handler/error.handler');

const getCourses = async (req, res) => {
  try {
    const query = {
      branch: req.body.branch,
    };

    const category = req.body.category;

    if (category !== '') {
      query['basicDetails.category'] = category;
    }

    const courses = await Course.find(query);
    res.status(200).send(courses);
  } catch (e) {
    e;
    errorHandler(e, 400, res);
  }
};

module.exports = getCourses;
