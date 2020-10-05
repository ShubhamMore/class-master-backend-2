const Batch = require('../../models/batch.model');
const BatchSubjectTeacher = require('../../models/batch-subject-teacher.model');

const errorHandler = require('../../handler/error.handler');

const updateBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.body._id, req.body);
    if (!batch) {
      throw new Error('Batch Updation Failed');
    }

    const batchSubjectTeachers = await BatchSubjectTeacher.find({
      branch: batch.branch,
      category: batch.category,
      course: batch.course,
      batch: batch._id,
    });

    batch.subjects.forEach(async (subject) => {
      batchSubjectTeacher = batchSubjectTeachers.find(
        (employeeSubject) => employeeSubject.subject === subject.subject
      );

      if (subject.status && batchSubjectTeacher) {
        await BatchSubjectTeacher.findByIdAndUpdate(batchSubjectTeacher._id, {
          employee: subject.teacher ? subject.teacher : null,
        });
      } else if (subject.status && !batchSubjectTeacher) {
        newBatchSubjectTeacher = {
          employee: subject.teacher,
          branch: batch.branch,
          category: batch.category,
          course: batch.course,
          batch: batch._id,
          subject: subject.subject,
        };
        new BatchSubjectTeacher(newBatchSubjectTeacher).save();
      } else if (!subject.status && batchSubjectTeacher) {
        await BatchSubjectTeacher.findByIdAndUpdate(batchSubjectTeacher._id, {
          employee: null,
          status: subject.status,
        });
      }
    });

    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, e.status || 400, res);
  }
};

module.exports = updateBatch;
