const mongoose = require('mongoose');
const budgetSchema = new mongoose.Schema({
  receipt: {
    type: String,
    default: null,
  },
  salary: {
    type: String,
    default: null,
  },
  generatedBy: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
