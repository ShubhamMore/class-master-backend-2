const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  branch: {
    type: String,
    require: true,
  },
  basicDetails: {
    courseName: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
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
        require: true,
      },
      status: {
        type: Boolean,
        require: true,
      },
    },
  ],
  feeDetails: {
    fees: {
      type: String,
      require: true,
    },
    gst: {
      type: String,
      require: true,
    },
    inclusiveGST: {
      type: Boolean,
      require: true,
    },
    totalFees: {
      type: String,
      require: true,
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
