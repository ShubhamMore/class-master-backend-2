const StudentCourse = require('../../models/student-course.model');
const errorHandler = require('../../handler/error.handler');

const getStudentsForExam = async (req, res) => {
  try {
    console.log(req.body);

    // SELECT ALL FROM STUDENTS WHERE COURSE = req.body.course AND BATCH = req.body.batch AND (STATUS = "0" OR STATUS = "1") AND STUDENT.SUBJECTS.includes(req.body.subject)
    const students = await StudentCourse.find(
      {
        branch: req.body.branch,
        category: req.body.category,
        course: req.body.course,
        batch: req.body.batch,
        status: true,
      },
      { student: 1 }
    );

    if (!students) {
      throw new Error('No Student Found');
    }

    res.status(200).send(students);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStudentsForExam;
