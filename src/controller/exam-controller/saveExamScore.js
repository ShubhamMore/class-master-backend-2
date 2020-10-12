const Exam = require('../../models/exam.model');
const errorHandler = require('../../handler/error.handler');

const saveExamScore = async (req, res) => {
  try {
    const exam = await Exam.findById(req.body.id);

    if (!exam) {
      throw new Error('No Exam Found');
    }

    const examMarks = req.body.marks;
    const invalidStudentMarks = new Array();

    examMarks.forEach((student) => {
      console.log(student.marks, Number.isInteger(student.marks));
      if (!Number.isInteger(student.marks)) {
        invalidStudentMarks.push(student.name);
      } else if (
        Number.isInteger(student.marks) &&
        (student.marks > exam.outOfMarks || student.marks < 0)
      ) {
        invalidStudentMarks.push(student.name);
      }
    });

    if (invalidStudentMarks.length > 0) {
      throw new Error('Enter Valid Marks for student ' + invalidStudentMarks.join(', '));
    }

    await Exam.findByIdAndUpdate(req.body.id, { marks: examMarks });

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveExamScore;
