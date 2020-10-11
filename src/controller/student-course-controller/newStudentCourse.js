const StudentCourse = require('../../models/student-course.model');
const StudentCourseInstallment = require('../../models/student-course-installment.model');
const errorHandler = require('../../handler/error.handler');

const newStudentCourse = async (req, res) => {
  try {
    const studentCourse = await StudentCourse.findOne({
      branch: req.body.studentCourse.branch,
      category: req.body.studentCourse.category,
      course: req.body.studentCourse.course,
      batch: req.body.studentCourse.batch,
      rollNumber: req.body.studentCourse.rollNumber,
    });

    if (studentCourse) {
      throw new Error('Student Roll Number for this Batch already Exist');
    }

    const newStudentCourse = new StudentCourse(req.body.studentCourse);

    await newStudentCourse.save();

    const newStudentCourseInstallment = new StudentCourseInstallment(
      req.body.studentCourseInstallment
    );
    await newStudentCourseInstallment.save();

    await StudentCourse.findByIdAndUpdate(newStudentCourse._id, {
      studentCourseInstallment: newStudentCourseInstallment._id,
    });

    res.status(201).send({ success: true });
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = newStudentCourse;
