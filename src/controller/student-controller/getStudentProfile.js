const Student = require('../../models/student.model');
const findBranchName = require('../../functions/findBranchName');
const findCourseType = require('../../functions/findCourseTypeValue');
const findCourseName = require('../../functions/findCourseName');
const findBatchName = require('../../functions/findBatchName');
const errorHandler = require('../../handler/error.handler');

const getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.body._id, { _id: 0 });

    student.courseType = await findCourseType(student.branch, student.courseType);
    student.branch = await findBranchName(student.branch);
    student.course = await findCourseName(student.course);
    student.batch = await findBatchName(student.batch);

    res.status(200).send(student);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentProfile;
