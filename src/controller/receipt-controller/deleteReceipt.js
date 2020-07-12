const Receipt = require('../../models/receipt.model');
const Student = require('../../models/student.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const deleteReceipt = async (req, res) => {
  try {
    const receipt = await Receipt.findByIdAndDelete(req.body._id);
    if (receipt.feeType !== '2') {
      const student = await Student.findById(receipt.student);
      const paidAmount = parseInt(student.paidAmount) - parseInt(receipt.amount);
      const amountDue = parseInt(student.amountDue) + parseInt(receipt.amount);
      await Student.findByIdAndUpdate(student._id, {
        paidAmount,
        amountDue,
      });
    }
    await Budget.findOneAndDelete({ receipt: receipt._id });
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = deleteReceipt;
