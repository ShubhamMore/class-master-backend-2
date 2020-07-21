const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const getStudentCourseSingleInstallment = async (req, res) => {
  try {
    const studentCourseInstallment = await StudentCourseInstallment.aggregate([
      {
        $match: {
          _id: req.body.id,
          'installments.$_id': req.body.installmentId,
        },
      },
      {
        $unwind: '$installments',
      },
    ]);

    if (!studentCourseInstallment) {
      throw new Error('No Student Course Installment Found');
    }

    res.status(200).send(studentCourseInstallment);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentCourseSingleInstallment;
