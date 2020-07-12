const Receipt = require('../../models/receipt.model');
const Student = require('../../models/student.model');
const errorHandler = require('../../handler/error.handler');

const getAllReceipts = async (req, res) => {
  try {
    const receipt = await Receipt.find({ student: req.body.student });
    const student = await Student.findById(req.body.student);
    res.status(200).send({ receipt, student });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getAllReceipts;
