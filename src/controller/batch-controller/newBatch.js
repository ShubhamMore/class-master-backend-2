const Batch = require('../../models/batch.model');
const BatchSubjectTeacher = require('../../models/batch-subject-teacher.model');

const errorHandler = require('../../handler/error.handler');

const newBatch = async (req, res) => {
  try {
    const batch = new Batch(req.body);
    await batch.save();

    const batchSubjectTeachers = new Array();
    batch.subjects.forEach((subject) => {
      if (subject.status) {
        batchSubjectTeacher = {
          employee: subject.teacher ? subject.teacher : null,
          branch: batch.branch,
          category: batch.category,
          course: batch.course,
          batch: batch._id,
          subject: subject.subject,
        };
        batchSubjectTeachers.push(batchSubjectTeacher);
      }
    });

    await BatchSubjectTeacher.insertMany(batchSubjectTeachers);

    res.status(201).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newBatch;
