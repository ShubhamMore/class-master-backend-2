const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const deleteStudentCourseInstallment = async (req, res) => {
  try {
    const studentCourseInstallment = await StudentCourseInstallment.findByIdAndDelete(req.body.id);

    if (!studentCourseInstallment) {
      throw new Error('No student Course Installment Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteStudentCourseInstallment;
