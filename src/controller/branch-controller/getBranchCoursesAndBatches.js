const Branch = require('../../models/branch.model');
const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const getBranchCoursesAndBatches = async (req, res) => {
  try {
    const branchId = req.body.branch;
    if (!branchId) {
      throw new Error('Branch ID is required');
    }

    const branch = Branch.findById(branchId, { _id: 1, basicDetails: 1, categories: 1 });
    const courses = Course.find({ branch: branchId }, { _id: 1, basicDetails: 1 });
    const batches = Batch.find({ branch: branchId }, { _id: 1, basicDetails: 1 });

    Promise.all([branch, courses, batches])
      .then((result) => {

        if(!result[0]) {
            throw new Error('Branch Not Found')
        }

        res.status(200).send({
          branch: result[0],
          courses: result[1],
          batches: result[2],
        });
      })
      .catch((e) => {
        errorHandler(e, 400, res);
      });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchCoursesAndBatches;
