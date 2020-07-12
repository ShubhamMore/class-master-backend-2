const Branch = require('../../models/branch.model');
const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const generateBranchesCoursesBatches = async (branches, courses, batches) => {
  const newBranches = new Array();

  branches.forEach((branch) => {
    const branchObj = {
      _id: branch._id,
      branchName: branch.branchName,
    };
    const newCourseTypes = new Array();
    branch.courseTypes.forEach((courseType) => {
      if (courseType.status === '1') {
        const courseTypeObj = {
          _id: courseType._id,
          courseType: courseType.courseType,
        };
        const newCourses = new Array();
        courses.forEach((course) => {
          if (course.courseType == courseType._id) {
            const courseObj = {
              _id: course._id,
              courseName: course.courseName,
            };
            const newBatches = new Array();
            batches.forEach((batch) => {
              if (batch.course == course._id) {
                const batchObj = {
                  _id: batch._id,
                  batchName: batch.batchName,
                };
                newBatches.push(batchObj);
              }
            });
            courseObj.batches = newBatches;
            newCourses.push(courseObj);
          }
        });
        courseTypeObj.courses = newCourses;
        newCourseTypes.push(courseTypeObj);
      }
    });
    branchObj.courseTypes = newCourseTypes;
    newBranches.push(branchObj);
  });

  return newBranches;
};

const getBranchCoursesBatches = async (req, res) => {
  try {
    const branches = await Branch.find({ _id: req.body._id });
    if (branches.length < 1) {
      throw new Error('No Branch Found');
    }
    const courses = await Course.find();
    const batches = await Batch.find();
    const data = await generateBranchesCoursesBatches(branches, courses, batches);

    res.status(200).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchCoursesBatches;
