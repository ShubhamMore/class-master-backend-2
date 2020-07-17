const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const changeCourseStatus = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    if (!course) {
      throw new Error(
        `Course ${req.body.status ? 'Activation' : 'Deactivation'}  Failed, No Course Found`
      );
    }

    await Batch.updateMany(
      { branch: course.branch, category: course.category, course: course._id },
      {
        status: req.body.status,
      }
    );

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeCourseStatus;
