const Batch = require('../../models/batch.model');
const BatchSubjectTeacher = require('../../models/batch-subject-teacher.model');

const errorHandler = require('../../handler/error.handler');

const changeBatchStatus = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.body.id, {
      status: req.body.status,
    });
    if (!batch) {
      throw new Error('Status Updation Failed, No Batch Found');
    }

    await BatchSubjectTeacher.updateMany(
      { branch: batch.branch, category: batch.category, course: batch.course, batch: batch._id },
      { status: req.body.status }
    );

    res.status(200).send({ success: true });
  } catch (err) {
    errorHandler(err, 400, res);
  }
};

module.exports = changeBatchStatus;
