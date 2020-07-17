const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
  },
  basicDetails: {
    courseName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
  subjects: [
    {
      subject: {
        type: String,
        required: true,
      },
      status: {
        type: Boolean,
        required: true,
      },
    },
  ],
  feeDetails: {
    fees: {
      type: String,
      required: true,
    },
    gst: {
      type: String,
      required: true,
    },
    inclusiveGST: {
      type: Boolean,
      required: true,
    },
    totalFees: {
      type: String,
      required: true,
    },
  },
  status: {
    type: Boolean,
    default: true,
  },
});

courseSchema.methods.toJSON = function () {
  const course = this;
  const courseObject = course.toObject();

  delete courseObject.__v;

  return courseObject;
};

courseSchema.pre('remove', async function (next) {
  const course = this;
  await Batch.deleteMany({ course: course._id });
  next();
});

const course = mongoose.model('Course', courseSchema);

module.exports = course;
