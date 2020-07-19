const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const newStudentCourseInstallment = async (req, res) => {
  try {
    const studentCourseInstallment = new StudentCourseInstallment(req.body);
    await studentCourseInstallment.save();

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newStudentCourseInstallment;
