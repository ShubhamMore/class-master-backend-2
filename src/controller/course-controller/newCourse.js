const Course = require('../../models/course.model');
const errorHandler = require('../../handler/error.handler');

const newCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    const data = {
      success: true,
    };
    res.status(201).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newCourse;
