const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const InstituteBilling = require('../../models/institute-billing.model');
const Course = require('../../models/course.model');

const mongoose = require('mongoose');

const errorHandler = require('../../handler/error.handler');

const getStudentCourseInstallmentReceipt = async (req, res) => {
  try {
    const studentCourseInstallmentReceipt = await StudentCourseInstallmentReceipt.findById(
      req.body.id
    );

    if (!studentCourseInstallmentReceipt) {
      throw new Error('Receipt Not Available');
    }

    const instituteBilling = await InstituteBilling.findOne({
      branch: studentCourseInstallmentReceipt.branch,
    });

    if (!instituteBilling) {
      throw new Error('Institute Billing Details are Not Available');
    }

    const course = await Course.findOne({
      _id: mongoose.Types.ObjectId(studentCourseInstallmentReceipt.course),
    });

    res.status(200).send({ studentCourseInstallmentReceipt, instituteBilling, course });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseInstallmentReceipt;
