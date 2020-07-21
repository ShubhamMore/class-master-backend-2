const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourseInstallments = async (req, res) => {
  try {
    const studentCourseInstallments = await StudentCourseInstallment.find({
      branch: req.body.branch,
      category: req.body.category,
      student: req.body.student,
    });

    res.status(200).send(studentCourseInstallments);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseInstallments;
