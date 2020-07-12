const Receipt = require('../../models/receipt.model');
const Student = require('../../models/student.model');
const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const findBranchName = require('../../functions/findBranchName');

const getReceipt = async (req, res) => {
  try {
    const receipt = await Receipt.findById(req.body._id);
    const student = await Student.findById(receipt.student);
    const course = await Course.findById(receipt.course);
    const batch = await Batch.findById(receipt.batch);

    receipt.branch = await findBranchName(receipt.branch);
    receipt.student = student.name;
    receipt.amountDue = student.amountDue;
    receipt.course = course.courseName;
    receipt.batch = batch.batchName;

    res.status(200).send(receipt);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getReceipt;
