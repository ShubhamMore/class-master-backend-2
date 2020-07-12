const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const getStudents = async (req, res) => {
  try {
    let searchData = {
      branch: req.body.branch,
      courseType: req.body.courseType,
      course: req.body.course,
      batch: req.body.batch,
    };

    if (req.body.studentType === '0') {
      searchData.$or = [{ status: '0' }, { status: '1' }];
    } else if (req.body.studentType === '1') {
      searchData.status = '2';
    }

    const students = await Student.find(searchData);

    res.status(200).send(students);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudents;
