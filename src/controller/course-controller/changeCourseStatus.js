const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const BatchSubjectTeacher = require('../../models/batch-subject-teacher.model');

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

    const batchStatusUpdate = Batch.updateMany(
      { branch: course.branch, category: course.basicDetails.category, course: course._id },
      {
        status: req.body.status,
      }
    );

    const batchSubjectTeacherStatusUpdate = BatchSubjectTeacher.updateMany(
      { branch: course.branch, category: course.basicDetails.category, course: course._id },
      { status: req.body.status }
    );

    Promise.all([batchStatusUpdate, batchSubjectTeacherStatusUpdate])
      .then(() => {
        res.status(200).send({ success: true });
      })
      .catch((e) => {
        throw new Error(e);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = changeCourseStatus;
