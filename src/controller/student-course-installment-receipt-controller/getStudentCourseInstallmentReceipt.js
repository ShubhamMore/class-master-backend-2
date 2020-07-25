const StudentCourseInstallmentReceipt = require('../../models/student-course-installment-receipt.model');
const InstituteBilling = require('../../models/institute-billing.model');

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

    res.status(200).send({ studentCourseInstallmentReceipt, instituteBilling });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseInstallmentReceipt;
