const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourseInstallments = async (req, res) => {
  try {
    const studentCourseInstallment = await StudentCourseInstallment.find({
      student: req.body.student,
      course: req.body.course,
    });

    res.status(200).send(studentCourseInstallment);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseInstallments;
