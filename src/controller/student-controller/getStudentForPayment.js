const Student = require('../../models/student.model');
const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const findBranchName = require('../../functions/findBranchName');
const errorHandler = require('../../handler/error.handler');

const getStudentForPayment = async (req, res) => {
  try {
    const student = await Student.findById(req.body._id);
    if (!student) {
      throw new Error('No Student Found');
    }

    const course = await Course.findById(student.course);
    const batch = await Batch.findById(student.batch);

    const studentMetaData = {
      branch: await findBranchName(student.branch),
      course: course.courseName,
      batch: batch.batchName,
    };

    res.status(200).send({ student, studentMetaData });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentForPayment;
