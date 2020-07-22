const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourseInstallment = async (req, res) => {
  try {
    console.log(req.body);
    const studentCourseInstallment = await StudentCourseInstallment.findById(req.body.id);
    if (!studentCourseInstallment) {
      throw new Error('No Student Course Installment Found');
    }

    res.status(200).send(studentCourseInstallment);
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseInstallment;
