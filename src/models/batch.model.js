const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
  batchName: {
    type: String,
    require: true,
  },
  branch: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  rollNoPrefix: {
    type: String,
    require: true,
  },
  rollNo: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: null,
  },
  subjects: [
    {
      subject: {
        type: String,
        required: true,
      },
      teacher: {
        type: String,
        required: true,
      },
    },
  ],
  status: {
    type: Boolean,
    default: true,
  },
});

batchSchema.methods.toJSON = function () {
  const batch = this;
  const batchObject = batch.toObject();

  delete batchObject.__v;

  return batchObject;
};

batchSchema.pre('remove', async function (next) {
  const batch = this;
  await Student.deleteMany({ batch: batch._id });
  next();
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
