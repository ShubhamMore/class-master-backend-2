const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const updateStudentCourse = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findByIdAndUpdate(req.body.id, req.body);

    if (!studentCourse) {
      throw new Error('No Student Course Found, Updation Failed');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = updateStudentCourse;
