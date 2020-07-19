const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const deleteStudentCourse = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findByIdAndDelete(req.body.id);

    if (!studentCourse) {
      throw new Error('No student Course Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteStudentCourse;
