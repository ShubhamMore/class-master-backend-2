const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const checkBatchRollNumber = async (req, res) => {
  try {
    console.log(req.body);
    const studentCourse = await StudentCourse.findOne({
      branch: req.body.branch,
      category: req.body.category,
      course: req.body.course,
      batch: req.body.batch,
      rollNumber: req.body.rollNumber,
    });

    let rollNumberExist = false;
    if (studentCourse) {
      rollNumberExist = true;
    }

    res.status(200).send({ rollNumberExist });
  } catch (e) {
    console.log(e);
    errorHandler(e, 400, res);
  }
};

module.exports = checkBatchRollNumber;
