const mongoose = require('mongoose');
const studentFeeSchema = new mongoose.Schema({
  student: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  installmentType: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  noOfInstallments: {
    type: Number,
    required: true,
  },
  amountCollected: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  pendingAmount: {
    type: Number,
    required: true,
  },
  installments: [
    {
      installmentNo: {
        type: Number,
        required: true,
      },
      installmentDate: {
        type: String,
        required: true,
      },
      installmentAmount: {
        type: Number,
        required: true,
      },
      amountPending: {
        type: Number,
        required: true,
      },
      receiptId: {
        type: String,
        default: null,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

studentFeeSchema.methods.toJSON = function () {
  const studentFee = this;
  const studentFeeObject = studentFee.toObject();

  delete studentFeeObject.__v;

  return studentFeeObject;
};

const StudentFee = mongoose.model('StudentFee', studentFeeSchema);

module.exports = StudentFee;
