const Receipt = require('../../models/receipt.model');
const Student = require('../../models/student.model');
const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const numToWords = require('../../functions/numToWords');

const newReceipt = async (req, res) => {
  try {
    const receipt = new Receipt(req.body);
    receipt.totalAmountInWords = await numToWords(receipt.totalAmount);

    if (receipt.feeType !== '2') {
      const student = await Student.findById(receipt.student);
      const paidAmount = parseInt(student.paidAmount) + parseInt(receipt.amount);
      const amountDue = parseInt(student.amountDue) - parseInt(receipt.amount);
      await Student.findByIdAndUpdate(student._id, {
        paymentType: amountDue === 0 ? null : receipt.feeType,
        paidAmount,
        amountDue,
      });
    }
    await receipt.save();
    const budget = new Budget({
      receipt: receipt._id,
      branch: receipt.branch,
      generatedBy: receipt.generatedBy,
      title: 'Student Fees',
      amount: receipt.totalAmount,
      type: '1',
      date: receipt.date,
    });
    await budget.save();
    res.status(201).send({ _id: receipt._id });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = newReceipt;
