const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const getAllStudentCourseInstallmentReceipts = async (req, res) => {
  try {
    const studentCourseInstallmentReceipt = await StudentCourseInstallmentReceipt.find({
      student: req.body.student,
    });

    const student = await Student.findById(req.body.student);

    res.status(200).send({ studentCourseInstallmentReceipt, student });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllStudentCourseInstallmentReceipts;
