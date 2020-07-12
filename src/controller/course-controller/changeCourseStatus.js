const Course = require('../../models/course.model');
const errorHandler = require('../../handler/error.handler');

const changeCourseStatus = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.body._id, {
      status: req.body.status,
    });
    if (!course) {
      throw new Error('Status Updation Failed, No Course Found');
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeCourseStatus;
