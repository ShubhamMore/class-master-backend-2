const Student = require('../../models/student.model');
const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const findBranchName = require('../../functions/findBranchName');
const findCourseTypeValue = require('../../functions/findCourseTypeValue');
const errorHandler = require('../../handler/error.handler');

const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.body._id);
    if (!student) {
      throw new Error('No Student Found');
    }

    // const course = await Course.findById(student.course);
    // const batch = await batch.findById(student.batch);

    // const studentMetaData = {
    //   branch: await findBranchName(student.branch),
    //   courseType: await findCourseTypeValue(student.branch, student.courseType),
    //   course: course.courseName,
    //   batch: batch.batchName,
    // };

    res.status(200).send(student);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudent;
